import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import SuccessScreen from "@screens/Common/SuccessScreen";

import { SignUpNavigatorParams } from "@screens/Unprotected/SignUp/SignUpNavigatorParams";
import { SignUpSuccessRoute } from "@screens/Unprotected/SignUp/routes";
import { SignInRoute } from "@screens/Unprotected/routes";

import { NAMESPACE_AUTH, NAMESPACE_COMMON } from "@consts/namespaces";

import useResetNavigation from "@hooks/useResetNavigation";

type SignUpSuccessNavigationProp = StackNavigationProp<
  SignUpNavigatorParams,
  typeof SignUpSuccessRoute
>;

type SignUpSuccessRouteProp = RouteProp<
  SignUpNavigatorParams,
  typeof SignUpSuccessRoute
>;

interface SignUpSuccessProps {
  navigation: SignUpSuccessNavigationProp;
  route: SignUpSuccessRouteProp;
}

const SignUpSuccessScreen: React.FC<SignUpSuccessProps> = () => {
  const { t } = useTranslation([NAMESPACE_AUTH, NAMESPACE_COMMON]);

  const resetNavigation = useResetNavigation();

  return (
    <SuccessScreen
      title={t(`${NAMESPACE_COMMON}:Successfully verified`)}
      submitButton={{
        onSubmit: () => resetNavigation(SignInRoute),
        text: t("Go to sign in"),
        dataTestId: "sign-in-button",
      }}
    />
  );
};

export default SignUpSuccessScreen;
