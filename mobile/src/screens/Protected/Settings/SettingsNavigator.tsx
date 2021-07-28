import React from "react";
import { RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { ProtectedNavigatorParams } from "@screens/Protected/ProtectedNavigatorParams";
import { SettingsRoute } from "@screens/Protected/routes";

import Header from "@components/Header";

import { SettingsMainRoute, SettingsNotificationRoute } from "./routes";

import SettingsNotificationScreen from "./SettingsNotificationScreen";
import SettingsMainScreen from "./SettingsMainScreen";

import { SettingsNavigatorParams } from "./SettingsNavigatorParams";

const Stack = createStackNavigator<SettingsNavigatorParams>();

type SettingsNavigatorNavigationProp = StackNavigationProp<
  ProtectedNavigatorParams,
  typeof SettingsRoute
>;

type SettingsNavigatorRouteProp = RouteProp<
  ProtectedNavigatorParams,
  typeof SettingsRoute
>;

interface SettingsNavigatorProps {
  navigation: SettingsNavigatorNavigationProp;
  route: SettingsNavigatorRouteProp;
}

const SignUpNavigator: React.FC<SettingsNavigatorProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName={SettingsMainRoute}
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
      }}
      headerMode="screen">
      <Stack.Screen
        options={{ headerShown: false }}
        name={SettingsMainRoute}
        component={SettingsMainScreen}
      />
      <Stack.Screen
        name={SettingsNotificationRoute}
        component={SettingsNotificationScreen}
      />
    </Stack.Navigator>
  );
};

export default SignUpNavigator;
