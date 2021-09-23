import React, { useCallback, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";

import { Auth } from "aws-amplify";

import { ForgotPasswordRoute, SignInRoute } from "@screens/Unprotected/routes";
import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";

import useResetNavigation from "@hooks/useResetNavigation";
import removeAllWhitespaces from "@utils/removeAllWhitespaces";

import { ForgotPasswordNavigatorParams } from "../ForgotPasswordNavigatorParams";
import {
  ForgotPasswordEmailRoute,
  ForgotPasswordVerificationRoute,
} from "../routes";

import ForgotPasswordEmailState from "./ForgotPasswordEmailView/ForgotPasswordEmailForm/ForgotPasswordEmailState";
import ForgotPasswordEmailView from "./ForgotPasswordEmailView";

type ForgotPasswordEmailNavigationProp = CompositeNavigationProp<
  StackNavigationProp<
    ForgotPasswordNavigatorParams,
    typeof ForgotPasswordEmailRoute
  >,
  StackNavigationProp<UnprotectedNavigatorParams, typeof ForgotPasswordRoute>
>;

interface ForgotPasswordEmailProps {
  navigation: ForgotPasswordEmailNavigationProp;
}

const ForgotPasswordEmailScreen: React.FC<ForgotPasswordEmailProps> = ({
  navigation,
}) => {
  const resetNavigation = useResetNavigation();

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = useCallback(
    async ({ email }: ForgotPasswordEmailState) => {
      try {
        setLoading(true);
        await Auth.forgotPassword(removeAllWhitespaces(email).toLowerCase());
        setLoading(false);
        navigation.navigate(ForgotPasswordVerificationRoute, {
          email,
        });
      } catch {
        setLoading(false);
      }
    },
    [navigation]
  );

  return (
    <ForgotPasswordEmailView
      onSignIn={() => resetNavigation(SignInRoute)}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};

export default ForgotPasswordEmailScreen;
