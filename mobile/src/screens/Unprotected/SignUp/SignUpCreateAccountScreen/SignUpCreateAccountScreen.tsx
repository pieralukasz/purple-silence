import React, { useCallback, useState } from "react";
import { Auth } from "aws-amplify";

import { StackNavigationProp } from "@react-navigation/stack";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { SignUpNavigatorParams } from "@screens/Unprotected/SignUp/SignUpNavigatorParams";
import {
  SignUpCreateAccountRoute,
  SignUpVerificationRoute,
} from "@screens/Unprotected/SignUp/routes";

import { SignInRoute, SignUpRoute } from "@screens/Unprotected/routes";
import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";

import useResetNavigation from "@hooks/useResetNavigation";
import removeAllWhitespaces from "@utils/removeAllWhitespaces";

import SignUpCreateAccountView from "./SignUpCreateAccountView";
import SignUpCreateAccountFormState from "./SignUpCreateAccountView/SignUpCreateAccountForm/SignUpCreateAccountFormState";

type SignUpCreateAccountNavigationProp = CompositeNavigationProp<
  StackNavigationProp<SignUpNavigatorParams, typeof SignUpCreateAccountRoute>,
  StackNavigationProp<UnprotectedNavigatorParams, typeof SignUpRoute>
>;

type SignUpCreateAccountRouteProp = RouteProp<
  SignUpNavigatorParams,
  typeof SignUpCreateAccountRoute
>;

interface SignUpCreateAccountProps {
  navigation: SignUpCreateAccountNavigationProp;
  route: SignUpCreateAccountRouteProp;
}

const SignUpCreateAccountScreen: React.FC<SignUpCreateAccountProps> = ({
  navigation,
}) => {
  const resetNavigation = useResetNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  const onSignUp = useCallback(
    async (userCredential: SignUpCreateAccountFormState) => {
      const { email, password, phoneNumber } = userCredential;

      try {
        setLoading(true);
        await Auth.signUp({
          password: password.trim(),
          username: email,
          attributes: {
            email,
            phone_number: removeAllWhitespaces(phoneNumber!),
          },
        });
        navigation.navigate(SignUpVerificationRoute, {
          phoneNumber,
        });
        setLoading(false);
      } catch {
        setLoading(false);
      }
    },
    [navigation]
  );

  return (
    <SignUpCreateAccountView
      onSubmit={onSignUp}
      loading={loading}
      onSignIn={() => resetNavigation(SignInRoute)}
    />
  );
};

export default SignUpCreateAccountScreen;
