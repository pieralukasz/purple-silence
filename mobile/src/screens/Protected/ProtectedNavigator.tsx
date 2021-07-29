import React, { useEffect } from "react";
import { Platform } from "react-native";

import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { useTheme } from "react-native-paper";

import useUserContext from "@features/User/useUserContext";

import { MainNavigatorParams } from "@screens/MainNavigatorParams";
import { ProtectedRoute, UnprotectedRoute } from "@screens/routes";

import useResetNavigation from "@hooks/useResetNavigation";

import IndexActive from "@assets/icons/Index/IndexActive.svg";
import IndexInactive from "@assets/icons/Index/IndexInactive.svg";
import SettingsActive from "@assets/icons/Settings/SettingsActive.svg";
import SettingsInactive from "@assets/icons/Settings/SettingsInactive.svg";

import { DashboardRoute, SettingsRoute } from "./routes";
import DashboardScreen from "./DashboardScreen";
import styles from "./styles";

import { ProtectedNavigatorParams } from "./ProtectedNavigatorParams";

import SettingsNavigator from "./Settings/SettingsNavigator";

const TAB_HEIGHT = 68;
const TAB_PADDING_ANDROID = 22;
const TAB_PADDING_IOS = 8;

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
  const theme = useTheme();
  const { user } = useUserContext();
  const { t } = useTranslation();

  useEffect(() => {
    if (user === null) {
      resetNavigation(UnprotectedRoute);
    }
  }, [resetNavigation, user]);

  return (
    <Tab.Navigator
      initialRouteName={DashboardRoute}
      tabBarOptions={{
        style: {
          backgroundColor: theme.dark
            ? theme.customColors.gray
            : theme.customColors.white,
          height:
            TAB_HEIGHT +
            insets.bottom +
            (insets.bottom > 0
              ? 0
              : Platform.select({
                  android: TAB_PADDING_ANDROID,
                  ios: TAB_PADDING_IOS,
                  default: TAB_PADDING_IOS,
                })),
        },
        tabStyle: {
          ...styles.tabStyle,
          backgroundColor: theme.dark
            ? theme.customColors.gray
            : theme.customColors.white,
          paddingBottom:
            insets.bottom > 0
              ? 0
              : Platform.select({
                  android: TAB_PADDING_ANDROID,
                  ios: TAB_PADDING_IOS,
                }),
        },
      }}>
      <Tab.Screen
        options={{
          tabBarAccessibilityLabel: "tab-index",
          tabBarTestID: "tab-index",
          tabBarIcon: ({ focused }) =>
            focused ? <IndexActive /> : <IndexInactive />,
          tabBarLabel: t("Index"),
        }}
        name={DashboardRoute}
        component={DashboardScreen}
      />
      <Tab.Screen
        options={{
          tabBarAccessibilityLabel: "tab-settings",
          tabBarTestID: "tab-settings",
          tabBarIcon: ({ focused }) =>
            focused ? <SettingsActive /> : <SettingsInactive />,
          tabBarLabel: t("Settings"),
        }}
        name={SettingsRoute}
        component={SettingsNavigator}
      />
    </Tab.Navigator>
  );
};

export default ProtectedNavigator;
