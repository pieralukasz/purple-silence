import React from "react";
import { View } from "react-native";

import { Button, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

import attachAccessibilityID from "@utils/attachAccessibilityID";
import CommonViewProps from "@interfaces/CommonViewProps";
import ScreenLayout from "@layouts/ScreenLayout";
import { NAMESPACE_AUTH } from "@consts/namespaces";

import theme from "@themes/defaultTheme";

import SignInForm from "./SignInForm";
import SignInFormState from "./SignInForm/SignInFormState";
import styles from "./styles";

interface SignInViewProps extends CommonViewProps<SignInFormState> {
  onForgotPassword: () => void;
  onSignUp: () => void;
}

const SignInView: React.FC<SignInViewProps> = ({
  onForgotPassword,
  onSignUp,
  onSubmit,
  loading,
}) => {
  const { top } = useSafeAreaInsets();
  const { t } = useTranslation(NAMESPACE_AUTH);

  return (
    <ScreenLayout
      viewStyles={{ paddingTop: top + theme.spacing.emptyHeader }}
      title={t("Sign In")}
      loading={loading}>
      <SignInForm onSubmit={onSubmit} />
      <View style={styles.forgotPassword}>
        <Button
          {...attachAccessibilityID("forgot-password-button")}
          mode="text"
          onPress={onForgotPassword}>
          {t("Forgot Password?")}
        </Button>
      </View>
      <View style={styles.signUp}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Text style={styles.signUpText}>{t("Don't have an account?")}</Text>
        <Button
          {...attachAccessibilityID("go-to-sign-up-page-button")}
          mode="outlined"
          onPress={onSignUp}>
          {t("Sign Up")}
        </Button>
      </View>
    </ScreenLayout>
  );
};

export default SignInView;
