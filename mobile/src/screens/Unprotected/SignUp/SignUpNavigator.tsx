import React from "react";

import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { SignUpRoute } from "@screens/Unprotected/routes";

import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";

import Header from "@components/Header";

import { MainNavigatorParams } from "@screens/MainNavigatorParams";
import { SignUpNavigatorParams } from "./SignUpNavigatorParams";

import {
  SignUpCreateAccountRoute,
  SignUpSuccessRoute,
  SignUpVerificationRoute,
} from "./routes";

import SignUpVerificationScreen from "./SignUpVerificationScreen";
import SignUpSuccessScreen from "./SignUpSuccessScreen";
import SignUpCreateAccountScreen from "./SignUpCreateAccountScreen";

const Stack = createStackNavigator<SignUpNavigatorParams>();

type SignUpNavigatorNavigationProp = CompositeNavigationProp<
  StackNavigationProp<UnprotectedNavigatorParams, typeof SignUpRoute>,
  StackNavigationProp<MainNavigatorParams>
>;

type SignUpNavigatorRouteProp = RouteProp<
  UnprotectedNavigatorParams,
  typeof SignUpRoute
>;

interface SignUpNavigatorProps {
  navigation: SignUpNavigatorNavigationProp;
  route: SignUpNavigatorRouteProp;
}

const SignUpNavigator: React.FC<SignUpNavigatorProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName={SignUpCreateAccountRoute}
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
      }}
      headerMode="screen">
      <Stack.Screen
        name={SignUpCreateAccountRoute}
        component={SignUpCreateAccountScreen}
      />
      <Stack.Screen
        name={SignUpVerificationRoute}
        component={SignUpVerificationScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={SignUpSuccessRoute}
        component={SignUpSuccessScreen}
      />
    </Stack.Navigator>
  );
};

export default SignUpNavigator;
