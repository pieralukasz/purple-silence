import React, { useCallback, useEffect, useState } from "react";

import { Auth, Hub } from "aws-amplify";

import HubEvent from "@enums/HubEvent";

import User from "@interfaces/User";

export interface UserContextValue {
  isUserAdmin(): boolean;
  user?: User | null;
  updateUser(userData: Partial<User>): void;
}

export const UserContext = React.createContext<UserContextValue>({
  isUserAdmin: () => false,
  user: undefined,
  updateUser: () => {},
});

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | undefined | null>();

  const refreshUser = async () => {
    try {
      const {
        payload: {
          email,
          email_verified: emailVerified,
          phone_number: phoneNumber,
          phone_number_verified: phoneNumberVerified,
          sub,
          "cognito:groups": groups,
        },
      } = (await Auth.currentSession()).getIdToken();
      setUser({
        email,
        emailVerified,
        phoneNumber,
        phoneNumberVerified,
        sub,
        groups: groups || [],
      });
    } catch (e) {
      setUser(null);
    }
  };

  const updateUser = useCallback(
    (userData: Partial<User>) =>
      setUser((prevUserState) =>
        prevUserState ? { ...prevUserState, ...userData } : prevUserState
      ),
    []
  );

  const isUserAdmin = useCallback(
    (): boolean => user?.groups.includes("admin") ?? false,
    [user]
  );

  useEffect(() => {
    (async () => {
      Hub.listen("auth", async ({ payload: { event } }) => {
        switch (event as HubEvent) {
          case HubEvent.SignIn:
          case HubEvent.TokenRefresh:
            await refreshUser();
            break;
          case HubEvent.SignOut:
            setUser(null);
            break;
          default:
            break;
        }
      });

      await refreshUser();
    })();
  }, []);

  return (
    <UserContext.Provider value={{ isUserAdmin, user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
