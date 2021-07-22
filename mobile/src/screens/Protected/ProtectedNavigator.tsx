import React, { useEffect } from "react";

import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import useUserContext from "@features/User/useUserContext";

import { MainNavigatorParams } from "@screens/MainNavigatorParams";
import { ProtectedRoute, UnprotectedRoute } from "@screens/routes";

import useResetNavigation from "@hooks/useResetNavigation";

import Header from "@components/Header";

import IndexActive from "@assets/icons/Index/IndexActive.svg";
import IndexInactive from "@assets/icons/Index/IndexInactive.svg";
import SettingsActive from "@assets/icons/Settings/SettingsActive.svg";
import SettingsInactive from "@assets/icons/Settings/SettingsInactive.svg";

import { DashboardRoute, SettingsRoute } from "./routes";

import { ProtectedNavigatorParams } from "./ProtectedNavigatorParams";
import DashboardScreen from "./DashboardScreen";
import SettingsScreen from "./SettingsScreen";
import styles from "./styles";

const Tab = createBottomTabNavigator<ProtectedNavigatorParams>();

type ProtectedNavigatorNavigationProp = BottomTabNavigationProp<
  MainNavigatorParams,
  typeof ProtectedRoute
>;

type ProtectedNavigatorRouteProp = RouteProp<
  MainNavigatorParams,
  typeof ProtectedRoute
>;

interface ProtectedNavigatorProps {
  navigation: ProtectedNavigatorNavigationProp;
  route: ProtectedNavigatorRouteProp;
}

const ProtectedNavigator: React.FC<ProtectedNavigatorProps> = () => {
  const resetNavigation = useResetNavigation();
  const insets = useSafeAreaInsets();
  const { user } = useUserContext();

  useEffect(() => {
    if (user === null) {
      resetNavigation(UnprotectedRoute);
    }
  }, [resetNavigation, user]);

  return (
    <>
      <Tab.Navigator
        initialRouteName={DashboardRoute}
        tabBarOptions={{
          style: {
            height: 68 + insets.bottom + (insets.bottom > 0 ? 0 : 8),
          },
          tabStyle: {
            ...styles.tabStyle,
            paddingBottom: insets.bottom > 0 ? 0 : 8,
            paddingTop: insets.top,
          },
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? <IndexActive /> : <IndexInactive />,
            tabBarLabel: "Index",
          }}
          name={DashboardRoute}
          component={DashboardScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? <SettingsActive /> : <SettingsInactive />,
            tabBarLabel: "Settings",
          }}
          name={SettingsRoute}
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </>
  );
};

export default ProtectedNavigator;
