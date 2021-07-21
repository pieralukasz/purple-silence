import React, { useCallback, useState } from "react";
import { Auth } from "aws-amplify";

import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import SignInFormState from "@screens/Unprotected/SignInScreen/SignInView/SignInForm/SignInFormState";
import {
  ForgotPasswordRoute,
  SignInRoute,
  SignUpRoute,
} from "@screens/Unprotected/routes";
import { MainNavigatorParams } from "@screens/MainNavigatorParams";
import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";
import useResetNavigation from "@hooks/useResetNavigation";

import removeAllWhitespaces from "@utils/removeAllWhitespaces";

import SignInView from "./SignInView";

type SignInNavigationProp = CompositeNavigationProp<
  StackNavigationProp<UnprotectedNavigatorParams, typeof SignInRoute>,
  StackNavigationProp<MainNavigatorParams>
>;

type SignInRouteProp = RouteProp<
  UnprotectedNavigatorParams,
  typeof SignInRoute
>;

interface SignInProps {
  navigation: SignInNavigationProp;
  route: SignInRouteProp;
}

const SignInScreen: React.FC<SignInProps> = () => {
  const resetNavigation = useResetNavigation();

  const [loading, setLoading] = useState<boolean>(false);

  const onSignIn = useCallback(async ({ password, email }: SignInFormState) => {
    try {
      setLoading(true);

      await Auth.signIn({
        password: password.trim(),
        username: removeAllWhitespaces(email),
      });

      setLoading(false);
    } catch {
      setLoading(false);
    }
  }, []);

  return (
    <SignInView
      onSignUp={() => resetNavigation(SignUpRoute)}
      onForgotPassword={() => resetNavigation(ForgotPasswordRoute)}
      onSubmit={onSignIn}
      loading={loading}
    />
  );
};

export default SignInScreen;
