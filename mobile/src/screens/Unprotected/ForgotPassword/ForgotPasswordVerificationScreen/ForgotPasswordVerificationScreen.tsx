import React, { useCallback, useState } from "react";

import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ForgotPasswordParams } from "@screens/Unprotected/ForgotPassword/ForgotPasswordParams";
import {
  ForgotPasswordResetRoute,
  ForgotPasswordVerificationRoute,
} from "@screens/Unprotected/ForgotPassword/routes";

import ForgotPasswordVerificationView from "./ForgotPasswordVerificationView";

type ForgotPasswordVerificationNavigationProp = StackNavigationProp<
  ForgotPasswordParams,
  typeof ForgotPasswordVerificationRoute
>;

type ForgotPasswordVerificationRouteProp = RouteProp<
  ForgotPasswordParams,
  typeof ForgotPasswordVerificationRoute
>;

interface ForgotPasswordVerificationProps {
  navigation: ForgotPasswordVerificationNavigationProp;
  route: ForgotPasswordVerificationRouteProp;
}

const ForgotPasswordVerificationScreen: React.FC<ForgotPasswordVerificationProps> =
  ({ navigation }) => {
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = useCallback(() => {
      try {
        setLoading(true);
        navigation.navigate(ForgotPasswordResetRoute);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }, [navigation]);

    const onResendCode = useCallback(() => {
      try {
        setLoading(true);
        console.log("RESEND CODE");
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }, []);

    return (
      <ForgotPasswordVerificationView
        onSubmit={onSubmit}
        onResendCode={onResendCode}
        loading={loading}
        phoneNumber="+48 3213123213"
      />
    );
  };

export default ForgotPasswordVerificationScreen;
