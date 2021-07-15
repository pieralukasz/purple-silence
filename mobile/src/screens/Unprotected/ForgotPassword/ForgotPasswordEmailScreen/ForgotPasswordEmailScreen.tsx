import React, { useCallback, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";

import { ForgotPasswordRoute, SignInRoute } from "@screens/Unprotected/routes";
import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";

import useResetNavigation from "@hooks/useResetNavigation";

import { ForgotPasswordParams } from "../ForgotPasswordParams";
import {
  ForgotPasswordEmailRoute,
  ForgotPasswordVerificationRoute,
} from "../routes";

import ForgotPasswordEmailView from "./ForgotPasswordEmailView";

type ForgotPasswordEmailNavigationProp = CompositeNavigationProp<
  StackNavigationProp<ForgotPasswordParams, typeof ForgotPasswordEmailRoute>,
  StackNavigationProp<UnprotectedNavigatorParams, typeof ForgotPasswordRoute>
>;

type ForgotPasswordEmailRouteProp = RouteProp<
  ForgotPasswordParams,
  typeof ForgotPasswordEmailRoute
>;

interface ForgotPasswordEmailProps {
  navigation: ForgotPasswordEmailNavigationProp;
  route: ForgotPasswordEmailRouteProp;
}

const ForgotPasswordEmailScreen: React.FC<ForgotPasswordEmailProps> = ({
  navigation,
}) => {
  const resetNavigation = useResetNavigation();

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = useCallback(() => {
    try {
      setLoading(true);
      navigation.navigate(ForgotPasswordVerificationRoute);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }, [navigation]);

  return (
    <ForgotPasswordEmailView
      onSignIn={() => resetNavigation(SignInRoute)}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};

export default ForgotPasswordEmailScreen;
