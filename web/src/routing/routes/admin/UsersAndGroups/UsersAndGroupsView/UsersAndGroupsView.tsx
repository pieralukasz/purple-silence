import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { Button, Tab as MuiTab, Tabs } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { TabContext, TabPanel } from "@material-ui/lab";

import useSnackContext from "@features/Snack/useSnackContext";

import UserModal from "@components/UserModal/UserModal";
import {
  useGetUsersLazyQuery,
  GetUsersDocument,
} from "../graphql/queries.generated";
import { useSetUserStatusMutation } from "../graphql/mutations.generated";
import initialState, {
  SearchAttr,
  Tab,
  UsersAndGroupsState,
  defaultLimit,
  parseQueryArgs,
} from "./utils";

import Users from "./Users";
import Groups from "./Groups";
import useStyles from "./styles";

const UsersAndGroupsView: React.FC = () => {
  const styles = useStyles();
  const snack = useSnackContext();
  const { t } = useTranslation("common");

  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(false);

  const [
    { tab, selected, updateInProgress, searchValue, searchAttr },
    dispatch,
  ] = useReducer(
    (state: UsersAndGroupsState, newState: Partial<UsersAndGroupsState>) => ({
      ...state,
      ...newState,
    }),
    initialState
  );

  const handleTabChange = (event: unknown, newValue: string) => {
    dispatch({ tab: newValue as Tab });
  };

  const [getUsers, { data, loading, fetchMore }] = useGetUsersLazyQuery({
    variables: { args: { limit: defaultLimit } },
  });

  const [setStatus, { error }] = useSetUserStatusMutation({
    onCompleted: () => {
      dispatch({ selected: {} });
    },
  });

  const handleGetNext = useCallback(async () => {
    if (fetchMore && data?.users.paginationToken) {
      await fetchMore({
        variables: {
          args: parseQueryArgs({
            paginationToken: data?.users.paginationToken,
            searchAttr,
            searchValue,
          }),
        },
        updateQuery: (pv, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return pv;
          }
          return {
            users: {
              __typename: "GetUsersResponse",
              ...fetchMoreResult.users,
              items: [...pv.users.items, ...fetchMoreResult.users.items],
            },
          };
        },
      });
    }
  }, [data?.users.paginationToken, fetchMore, searchAttr, searchValue]);

  const handleSearch = useCallback(async () => {
    getUsers({
      variables: {
        args: parseQueryArgs({
          searchAttr,
          searchValue,
        }),
      },
    });
  }, [searchAttr, searchValue, getUsers]);

  useEffect(() => {
    if (searchAttr !== SearchAttr.Email) {
      handleSearch();
    }
  }, [searchAttr, handleSearch]);
  useEffect(() => {
    if (!data && !loading) {
      getUsers();
    }
  }, [data, loading, getUsers]);
  useEffect(() => {
    if (error) {
      snack.show({ message: t("Something went wrong. Please try again.") });
    }
  }, [error, snack, t]);

  const selectedUsers = useMemo(
    () => Object.keys(selected)?.filter((id) => selected[id]) ?? [],
    [selected]
  );

  const updateStatusCall = (id: string, enabled: boolean) => {
    const { searchBy, ...queryArgs } = parseQueryArgs({
      searchAttr,
      searchValue,
    });

    setStatus({
      variables: {
        statusInput: {
          id,
          enabled,
        },
      },
      refetchQueries: [
        {
          query: GetUsersDocument,
          variables: {
            args: { ...queryArgs, filterBy: { enabled: true } },
          },
        },
        {
          query: GetUsersDocument,
          variables: {
            args: { ...queryArgs, filterBy: { enabled: false } },
          },
        },
      ],
    });
  };

  const mapIdsToStatusCall = (ids: string[], enabled: boolean) =>
    ids.map((id) => updateStatusCall(id, enabled));

  const handleStatusChange = async (enabled: boolean) => {
    dispatch({ updateInProgress: true });
    await Promise.all(mapIdsToStatusCall(selectedUsers, enabled)).finally(() =>
      dispatch({ updateInProgress: false })
    );
  };

  const handleCheckboxChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, id: string) => {
      dispatch({ selected: { ...selected, [id]: e.target.checked } });
    },
    [selected]
  );

  const handleSearchValueChange = (value: string) =>
    dispatch({ searchValue: value });
  const handleSearchAttrChange = (value: SearchAttr) => {
    dispatch({ searchAttr: value });
  };

  const isUpdateStatusButtonDisabled = useMemo(
    () => !selectedUsers.length || updateInProgress,
    [selectedUsers, updateInProgress]
  );

  return (
    <TabContext value={tab}>
      <div className={styles.tabHeader}>
        <Tabs value={tab} onChange={handleTabChange} textColor="secondary">
          <MuiTab
            value={Tab.Users}
            label="Users"
            data-testid="users-tab"
            className={styles.tab}
          />
          <MuiTab
            value={Tab.Groups}
            label="Groups"
            data-testid="groups-tab"
            className={styles.tab}
          />
        </Tabs>
        <div className={styles.tabHeaderAction}>
          <Button
            color="primary"
            data-testid="create-user-button"
            variant="contained"
            onClick={() => setIsUserModalOpen(true)}>
            {t("Create user")}
          </Button>
          <Button data-testid="add-to-group-button">{t("Add to group")}</Button>
          <Button
            data-testid="enable-user-button"
            disabled={isUpdateStatusButtonDisabled}
            onClick={() => handleStatusChange(true)}>
            {t("Enable")}
          </Button>
          <Button
            data-testid="disable-user-button"
            disabled={isUpdateStatusButtonDisabled}
            onClick={() => handleStatusChange(false)}>
            {t("Disable")}
          </Button>
        </div>
      </div>
      <TabPanel className={styles.panel} value={Tab.Users}>
        <Users
          data={data}
          selected={selected}
          searchAttr={searchAttr}
          searchValue={searchValue}
          onSearch={handleSearch}
          onGetNext={handleGetNext}
          onCheckboxChange={handleCheckboxChange}
          onSearchValueChange={handleSearchValueChange}
          onSearchAttrChange={handleSearchAttrChange}
        />
      </TabPanel>
      <TabPanel className={styles.panel} value={Tab.Groups}>
        <Groups />
      </TabPanel>
      <UserModal
        open={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
      />
    </TabContext>
  );
};

export default UsersAndGroupsView;
