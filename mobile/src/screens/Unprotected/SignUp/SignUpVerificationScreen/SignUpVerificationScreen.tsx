import React, { useCallback, useState } from "react";
import { Auth } from "aws-amplify";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import { SignUpNavigatorParams } from "@screens/Unprotected/SignUp/SignUpNavigatorParams";
import {
  SignUpSuccessRoute,
  SignUpVerificationRoute,
} from "@screens/Unprotected/SignUp/routes";
import SignUpVerificationView from "@screens/Unprotected/SignUp/SignUpVerificationScreen/SignUpVerificationView";
import SignUpVerificationFormState from "./SignUpVerificationView/SignUpVerificationForm/SignUpVerificationFormState";

type SignUpVerificationNavigationProp = StackNavigationProp<
  SignUpNavigatorParams,
  typeof SignUpVerificationRoute
>;

type SignUpVerificationRouteProp = RouteProp<
  SignUpNavigatorParams,
  typeof SignUpVerificationRoute
>;

interface SignUpVerificationProps {
  navigation: SignUpVerificationNavigationProp;
  route: SignUpVerificationRouteProp;
}

const SignUpVerificationScreen: React.FC<SignUpVerificationProps> = ({
  navigation,
  route,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { email } = route.params;

  const onVerifyCode = useCallback(
    async ({ verificationCode }: SignUpVerificationFormState) => {
      try {
        setLoading(true);
        await Auth.confirmSignUp(email, verificationCode);
        setLoading(false);
        navigation.navigate(SignUpSuccessRoute);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    },
    [navigation, email]
  );

  const onResendCode = useCallback(async () => {
    try {
      setLoading(true);
      await Auth.resendSignUp(email);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }, [email]);

  return (
    <SignUpVerificationView
      onSubmit={onVerifyCode}
      onResendCode={onResendCode}
      loading={loading}
      email={email}
    />
  );
};

export default SignUpVerificationScreen;
