import React, { useCallback, useState } from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Auth } from "aws-amplify";

import { ForgotPasswordNavigatorParams } from "@screens/Unprotected/ForgotPassword/ForgotPasswordNavigatorParams";
import {
  ForgotPasswordResetRoute,
  ForgotPasswordVerificationRoute,
} from "@screens/Unprotected/ForgotPassword/routes";

import removeAllWhitespaces from "@utils/removeAllWhitespaces";

import ForgotPasswordVerificationFormState from "./ForgotPasswordVerificationView/ForgotPasswordVerificationForm/ForgotPasswordVerificationFormState";
import ForgotPasswordVerificationView from "./ForgotPasswordVerificationView";

type ForgotPasswordVerificationNavigationProp = StackNavigationProp<
  ForgotPasswordNavigatorParams,
  typeof ForgotPasswordVerificationRoute
>;

type ForgotPasswordVerificationRouteProp = RouteProp<
  ForgotPasswordNavigatorParams,
  typeof ForgotPasswordVerificationRoute
>;

interface ForgotPasswordVerificationProps {
  navigation: ForgotPasswordVerificationNavigationProp;
  route: ForgotPasswordVerificationRouteProp;
}

const ForgotPasswordVerificationScreen: React.FC<ForgotPasswordVerificationProps> =
  ({ navigation, route }) => {
    const { email } = route.params;
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = useCallback(
      ({ verificationCode }: ForgotPasswordVerificationFormState) => {
        try {
          setLoading(true);
          navigation.navigate(ForgotPasswordResetRoute, {
            email,
            verificationCode,
          });
          setLoading(false);
        } catch {
          setLoading(false);
        }
      },
      [email, navigation]
    );

    const onResendCode = useCallback(async () => {
      try {
        setLoading(true);
        await Auth.forgotPassword(removeAllWhitespaces(email).toLowerCase());
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }, [email]);

    return (
      <ForgotPasswordVerificationView
        onSubmit={onSubmit}
        onResendCode={onResendCode}
        loading={loading}
        email={email}
      />
    );
  };

export default ForgotPasswordVerificationScreen;
