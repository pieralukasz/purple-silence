import React from "react";

import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ForgotPasswordParams } from "@screens/Unprotected/ForgotPassword/ForgotPasswordParams";
import { ForgotPasswordSuccessRoute } from "@screens/Unprotected/ForgotPassword/routes";
import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";
import { ForgotPasswordRoute, SignInRoute } from "@screens/Unprotected/routes";

import SuccessScreen from "@screens/Common/SuccessScreen";

import useResetNavigation from "@hooks/useResetNavigation";

type ForgotPasswordSuccessNavigationProp = CompositeNavigationProp<
  StackNavigationProp<ForgotPasswordParams, typeof ForgotPasswordSuccessRoute>,
  StackNavigationProp<UnprotectedNavigatorParams, typeof ForgotPasswordRoute>
>;

type ForgotPasswordSuccessRouteProp = RouteProp<
  ForgotPasswordParams,
  typeof ForgotPasswordSuccessRoute
>;

interface ForgotPasswordSuccessProps {
  navigation: ForgotPasswordSuccessNavigationProp;
  route: ForgotPasswordSuccessRouteProp;
}

const ForgotPasswordSuccessScreen: React.FC<ForgotPasswordSuccessProps> =
  () => {
    const resetNavigation = useResetNavigation();

    return (
      <SuccessScreen
        submitButton={{
          text: "Go to sign in",
          dataTestId: "sign-in-button",
          onSubmit: () => resetNavigation(SignInRoute),
        }}
        title="Your password has been changed"
      />
    );
  };

export default ForgotPasswordSuccessScreen;
