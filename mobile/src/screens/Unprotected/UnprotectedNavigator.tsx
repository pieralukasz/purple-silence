import React, { useEffect } from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import Header from "@components/Header";

import { ProtectedRoute, UnprotectedRoute } from "@screens/routes";

import { MainNavigatorParams } from "@screens/MainNavigatorParams";
import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";

import useUserContext from "@features/User/useUserContext";
import useResetNavigation from "@hooks/useResetNavigation";

import { ForgotPasswordRoute, SignInRoute, SignUpRoute } from "./routes";

import SignInScreen from "./SignInScreen";
import SignUpNavigator from "./SignUp/SignUpNavigator";
import ForgotPasswordNavigator from "./ForgotPassword/ForgotPasswordNavigator";

const Stack = createStackNavigator<UnprotectedNavigatorParams>();

type UnprotectedNavigatorNavigationProp = StackNavigationProp<
  MainNavigatorParams,
  typeof UnprotectedRoute
>;

type UnprotectedNavigatorRouteProp = RouteProp<
  MainNavigatorParams,
  typeof UnprotectedRoute
>;

interface UnprotectedNavigatorProps {
  navigation: UnprotectedNavigatorNavigationProp;
  route: UnprotectedNavigatorRouteProp;
}

const UnprotectedNavigator: React.FC<UnprotectedNavigatorProps> = () => {
  const resetNavigation = useResetNavigation();
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      resetNavigation(ProtectedRoute);
    }
  }, [resetNavigation, user]);

  return (
    <Stack.Navigator
      initialRouteName={SignInRoute}
      screenOptions={{ headerShown: true, header: () => <Header /> }}>
      <Stack.Screen name={SignInRoute} component={SignInScreen} />
      <Stack.Screen
        options={{ headerShown: false }}
        name={SignUpRoute}
        component={SignUpNavigator}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={ForgotPasswordRoute}
        component={ForgotPasswordNavigator}
      />
    </Stack.Navigator>
  );
};

export default UnprotectedNavigator;
