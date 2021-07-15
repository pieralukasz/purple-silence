import React, { useCallback, useState } from "react";
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

  const { phoneNumber } = route.params;

  const onVerifyCode = useCallback(
    (data: SignUpVerificationFormState) => {
      try {
        setLoading(true);
        console.log(data);
        setLoading(false);
        navigation.navigate(SignUpSuccessRoute);
      } catch {
        setLoading(false);
      }
    },
    [navigation]
  );

  return (
    <SignUpVerificationView
      onSubmit={onVerifyCode}
      onResendCode={() => {}}
      loading={loading}
      phoneNumber={phoneNumber}
    />
  );
};

export default SignUpVerificationScreen;
