import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import { SettingsNavigatorParams } from "@screens/Protected/Settings/SettingsNavigatorParams";
import { SettingsNotificationRoute } from "@screens/Protected/Settings/routes";

import SettingsNotificationView from "./SettingsNotificationView";

type SettingsNotificationNavigationProp = StackNavigationProp<
  SettingsNavigatorParams,
  typeof SettingsNotificationRoute
>;

type SettingsNotificationRouteProp = RouteProp<
  SettingsNavigatorParams,
  typeof SettingsNotificationRoute
>;

interface SettingsNotificationProps {
  navigation: SettingsNotificationNavigationProp;
  route: SettingsNotificationRouteProp;
}

const SettingsNotificationScreen: React.FC<SettingsNotificationProps> = () => {
  return <SettingsNotificationView />;
};

export default SettingsNotificationScreen;
