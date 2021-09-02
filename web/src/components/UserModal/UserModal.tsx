import React, { useCallback } from "react";

import produce from "immer";

import { useCreateUserMutation } from "@components/UserModal/graphql/mutations.generated";

import GetUsersReference from "@interfaces/GetUsersReference";

import { NewUserFragmentDoc } from "./UserModal.generated";
import UserFormModal, { UserFormState } from "./UserFormModal";

interface Props {
  open: boolean;
  onClose(): void;
}

const UserModal: React.FC<Props> = ({ open, onClose }) => {
  const [createUser] = useCreateUserMutation();

  const handleSubmit = useCallback(
    async (form: UserFormState) => {
      try {
        await createUser({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          variables: { input: form },
          update(cache, { data }) {
            cache.modify({
              fields: {
                getUsers(
                  usersRef: GetUsersReference = {
                    estimatedNumberOfUsers: 0,
                    items: [],
                  }
                ) {
                  if (!data) return usersRef;

                  const newUserRef = cache.writeFragment({
                    data: data.createUser,
                    fragment: NewUserFragmentDoc,
                  });

                  return produce(usersRef, (draft) => {
                    const numberOfUsers = draft.estimatedNumberOfUsers ?? 0;

                    draft.estimatedNumberOfUsers = numberOfUsers + 1;
                    draft.items.push(newUserRef as never);
                  });
                },
              },
            });
          },
        });

        onClose();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    },
    [createUser, onClose]
  );

  return (
    <UserFormModal open={open} onClose={onClose} onSubmit={handleSubmit} />
  );
};

export default UserModal;
