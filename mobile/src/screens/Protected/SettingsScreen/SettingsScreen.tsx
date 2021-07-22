import React, { useCallback } from "react";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";

import { ProtectedNavigatorParams } from "@screens/Protected/ProtectedNavigatorParams";
import { SettingsRoute } from "@screens/Protected/routes";

import SettingsView from "./SettingsView";
import { Auth } from "aws-amplify";

type SettingsNavigationProp = BottomTabNavigationProp<
  ProtectedNavigatorParams,
  typeof SettingsRoute
>;

type SettingsRouteProp = RouteProp<
  ProtectedNavigatorParams,
  typeof SettingsRoute
>;

interface SettingsProps {
  navigation: SettingsNavigationProp;
  route: SettingsRouteProp;
}

const SettingsScreen: React.FC<SettingsProps> = () => {
  const signOut = useCallback(async () => {
    await Auth.signOut();
  }, []);

  return <SettingsView onSignOut={signOut} />;
};

export default SettingsScreen;
