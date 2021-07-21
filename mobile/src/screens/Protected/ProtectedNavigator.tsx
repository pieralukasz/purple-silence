import React, { useEffect } from "react";

import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import Header from "@components/Header";

import useUserContext from "@features/User/useUserContext";

import { MainNavigatorParams } from "@screens/MainNavigatorParams";
import { ProtectedRoute, UnprotectedRoute } from "@screens/routes";

import useResetNavigation from "@hooks/useResetNavigation";

import { DashboardRoute } from "./routes";

import DashboardScreen from "./DashboardScreen";

import { ProtectedNavigatorParams } from "./ProtectedNavigatorParams";

const Stack = createStackNavigator<ProtectedNavigatorParams>();

type ProtectedNavigatorNavigationProp = StackNavigationProp<
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
  const { user } = useUserContext();

  useEffect(() => {
    if (user === null) {
      resetNavigation(UnprotectedRoute);
    }
  }, [resetNavigation, user]);

  return (
    <Stack.Navigator
      initialRouteName={DashboardRoute}
      screenOptions={{ headerShown: true, header: () => <Header /> }}>
      <Stack.Screen name={DashboardRoute} component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default ProtectedNavigator;
