import React, { useEffect } from "react";
import { View } from "react-native";

import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import Header from "@components/Header";

import useUserContext from "@features/User/useUserContext";

import { MainNavigatorParams } from "@screens/MainNavigatorParams";
import { testProtectedRoute } from "@screens/Protected/routes";
import { ProtectedRoute, UnprotectedRoute } from "@screens/routes";

import useResetNavigation from "@hooks/useResetNavigation";

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

const ProtectedNavigator: React.FC<ProtectedNavigatorProps> = ({
  navigation,
}) => {
  const resetNavigation = useResetNavigation();
  const { user } = useUserContext();

  useEffect(() => {
    if (user === null) {
      resetNavigation(UnprotectedRoute);
    }
  }, [navigation, resetNavigation, user]);

  return (
    <Stack.Navigator
      initialRouteName={ProtectedRoute}
      screenOptions={{ headerShown: true, header: () => <Header /> }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={testProtectedRoute}
        component={View}
      />
    </Stack.Navigator>
  );
};

export default ProtectedNavigator;
