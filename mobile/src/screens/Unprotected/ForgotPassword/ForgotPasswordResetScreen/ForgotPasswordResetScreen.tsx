import React, { useCallback, useState } from "react";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { ForgotPasswordParams } from "@screens/Unprotected/ForgotPassword/ForgotPasswordParams";
import {
  ForgotPasswordResetRoute,
  ForgotPasswordSuccessRoute,
} from "@screens/Unprotected/ForgotPassword/routes";
import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";
import { ForgotPasswordRoute } from "@screens/Unprotected/routes";

import useResetNavigation from "@hooks/useResetNavigation";

import ForgotPasswordResetView from "./ForgotPasswordResetView";

type ForgotPasswordResetNavigationProp = CompositeNavigationProp<
  StackNavigationProp<ForgotPasswordParams, typeof ForgotPasswordResetRoute>,
  StackNavigationProp<UnprotectedNavigatorParams, typeof ForgotPasswordRoute>
>;

type ForgotPasswordResetRouteProp = RouteProp<
  ForgotPasswordParams,
  typeof ForgotPasswordResetRoute
>;

interface ForgotPasswordResetProps {
  navigation: ForgotPasswordResetNavigationProp;
  route: ForgotPasswordResetRouteProp;
}

const ForgotPasswordResetScreen: React.FC<ForgotPasswordResetProps> = () => {
  const resetNavigation = useResetNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = useCallback(() => {
    try {
      setLoading(true);
      resetNavigation(ForgotPasswordSuccessRoute);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }, [resetNavigation]);

  return (
    <ForgotPasswordResetView
      // TODO
      onCancel={() => {}}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};

export default ForgotPasswordResetScreen;
