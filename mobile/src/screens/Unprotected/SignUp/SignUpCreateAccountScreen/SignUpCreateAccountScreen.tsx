import React, { useCallback, useState } from "react";
import { Auth } from "aws-amplify";
import { useTranslation } from "react-i18next";

import { StackNavigationProp } from "@react-navigation/stack";
import { CompositeNavigationProp } from "@react-navigation/native";
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

interface SignUpCreateAccountProps {
  navigation: SignUpCreateAccountNavigationProp;
}

const SignUpCreateAccountScreen: React.FC<SignUpCreateAccountProps> = ({
  navigation,
}) => {
  const { i18n } = useTranslation();
  const resetNavigation = useResetNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  const onSignUp = useCallback(
    async (userCredential: SignUpCreateAccountFormState) => {
      const { email, password, phoneNumber } = userCredential;

      try {
        setLoading(true);
        await Auth.signUp({
          password: password.trim(),
          username: email.toLowerCase(),
          attributes: {
            email,
            phone_number: removeAllWhitespaces(phoneNumber!),
            locale: i18n.language,
          },
        });

        navigation.navigate(SignUpVerificationRoute, {
          email,
        });
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    },
    [i18n.language, navigation]
  );

  const onSignIn = useCallback(() => {
    resetNavigation(SignInRoute);
  }, [resetNavigation]);

  return (
    <SignUpCreateAccountView
      onSubmit={onSignUp}
      loading={loading}
      onSignIn={onSignIn}
    />
  );
};

export default SignUpCreateAccountScreen;
