import React from "react";

import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import Header from "@components/Header";

import { ForgotPasswordParams } from "@screens/Unprotected/ForgotPassword/ForgotPasswordParams";
import { ForgotPasswordRoute } from "@screens/Unprotected/routes";
import { MainNavigatorParams } from "@screens/MainNavigatorParams";
import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";

import {
  ForgotPasswordEmailRoute,
  ForgotPasswordResetRoute,
  ForgotPasswordSuccessRoute,
  ForgotPasswordVerificationRoute,
} from "./routes";

import ForgotPasswordEmailScreen from "./ForgotPasswordEmailScreen";
import ForgotPasswordVerificationScreen from "./ForgotPasswordVerificationScreen";
import ForgotPasswordSuccessScreen from "./ForgotPasswordSuccessScreen";
import ForgotPasswordResetScreen from "./ForgotPasswordResetScreen";

const Stack = createStackNavigator<ForgotPasswordParams>();

type ForgotPasswordNavigatorNavigationProp = CompositeNavigationProp<
  StackNavigationProp<UnprotectedNavigatorParams, typeof ForgotPasswordRoute>,
  StackNavigationProp<MainNavigatorParams>
>;

type ForgotPasswordNavigatorRouteProp = RouteProp<
  UnprotectedNavigatorParams,
  typeof ForgotPasswordRoute
>;

interface ForgotPasswordNavigatorProps {
  navigation: ForgotPasswordNavigatorNavigationProp;
  route: ForgotPasswordNavigatorRouteProp;
}

const ForgotPasswordNavigator: React.FC<ForgotPasswordNavigatorProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName={ForgotPasswordEmailRoute}
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
      }}
      headerMode="screen">
      <Stack.Screen
        name={ForgotPasswordEmailRoute}
        component={ForgotPasswordEmailScreen}
      />
      <Stack.Screen
        name={ForgotPasswordVerificationRoute}
        component={ForgotPasswordVerificationScreen}
      />
      <Stack.Screen
        name={ForgotPasswordResetRoute}
        component={ForgotPasswordResetScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={ForgotPasswordSuccessRoute}
        component={ForgotPasswordSuccessScreen}
      />
    </Stack.Navigator>
  );
};

export default ForgotPasswordNavigator;
