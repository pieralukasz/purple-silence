import React, { useCallback, useState } from "react";
import { RouteProp } from "@react-navigation/native";

import { Auth } from "aws-amplify";

import { ForgotPasswordNavigatorParams } from "@screens/Unprotected/ForgotPassword/ForgotPasswordNavigatorParams";
import {
  ForgotPasswordResetRoute,
  ForgotPasswordSuccessRoute,
} from "@screens/Unprotected/ForgotPassword/routes";

import { SignInRoute } from "@screens/Unprotected/routes";

import useResetNavigation from "@hooks/useResetNavigation";

import ForgotPasswordResetView from "./ForgotPasswordResetView";
import ForgotPasswordResetFormState from "./ForgotPasswordResetView/ForgotPasswordResetForm/ForgotPasswordResetFormState";

type ForgotPasswordResetRouteProp = RouteProp<
  ForgotPasswordNavigatorParams,
  typeof ForgotPasswordResetRoute
>;

interface ForgotPasswordResetProps {
  route: ForgotPasswordResetRouteProp;
}

const ForgotPasswordResetScreen: React.FC<ForgotPasswordResetProps> = ({
  route,
}) => {
  const { email, verificationCode } = route.params;

  const resetNavigation = useResetNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = useCallback(
    async ({ password }: ForgotPasswordResetFormState) => {
      try {
        setLoading(true);
        await Auth.forgotPasswordSubmit(email, verificationCode, password);

        resetNavigation(ForgotPasswordSuccessRoute);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    },
    [email, resetNavigation, verificationCode]
  );

  const onCancel = useCallback(() => {
    resetNavigation(SignInRoute);
  }, [resetNavigation]);

  return (
    <ForgotPasswordResetView
      onCancel={onCancel}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};

export default ForgotPasswordResetScreen;
