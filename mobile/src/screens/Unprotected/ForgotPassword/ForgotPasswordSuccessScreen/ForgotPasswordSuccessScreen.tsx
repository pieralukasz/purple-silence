import React from "react";

import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";

import { ForgotPasswordNavigatorParams } from "@screens/Unprotected/ForgotPassword/ForgotPasswordNavigatorParams";
import { ForgotPasswordSuccessRoute } from "@screens/Unprotected/ForgotPassword/routes";
import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";
import { ForgotPasswordRoute, SignInRoute } from "@screens/Unprotected/routes";

import SuccessScreen from "@screens/Common/SuccessScreen";
import useResetNavigation from "@hooks/useResetNavigation";

import { NAMESPACE_AUTH } from "@consts/namespaces";

type ForgotPasswordSuccessNavigationProp = CompositeNavigationProp<
  StackNavigationProp<
    ForgotPasswordNavigatorParams,
    typeof ForgotPasswordSuccessRoute
  >,
  StackNavigationProp<UnprotectedNavigatorParams, typeof ForgotPasswordRoute>
>;

type ForgotPasswordSuccessRouteProp = RouteProp<
  ForgotPasswordNavigatorParams,
  typeof ForgotPasswordSuccessRoute
>;

interface ForgotPasswordSuccessProps {
  navigation: ForgotPasswordSuccessNavigationProp;
  route: ForgotPasswordSuccessRouteProp;
}

const ForgotPasswordSuccessScreen: React.FC<ForgotPasswordSuccessProps> =
  () => {
    const { t } = useTranslation(NAMESPACE_AUTH);

    const resetNavigation = useResetNavigation();

    return (
      <SuccessScreen
        submitButton={{
          text: t("Go to sign in"),
          dataTestId: "sign-in-button",
          onSubmit: () => resetNavigation(SignInRoute),
        }}
        title={t("Your password has been changed")}
      />
    );
  };

export default ForgotPasswordSuccessScreen;
