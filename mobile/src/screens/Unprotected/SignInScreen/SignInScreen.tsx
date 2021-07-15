import React, { useCallback, useState } from "react";

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

  const onSignIn = useCallback((data: SignInFormState) => {
    try {
      console.log(data);
      setLoading(true);
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
