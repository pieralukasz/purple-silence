import React from "react";
import { Button, Text } from "react-native-paper";
import { useTranslation } from "react-i18next";

import attachAccessibilityID from "@utils/attachAccessibilityID";
import CommonViewProps from "@interfaces/CommonViewProps";
import ScreenLayout from "@layouts/ScreenLayout";

import { NAMESPACE_AUTH } from "@consts/namespaces";

import ForgotPasswordEmailForm from "./ForgotPasswordEmailForm";
import ForgotPasswordEmailState from "./ForgotPasswordEmailForm/ForgotPasswordEmailState";
import styles from "./styles";

interface ForgotPasswordEmailViewProps
  extends CommonViewProps<ForgotPasswordEmailState> {
  onSignIn: () => void;
}

const ForgotPasswordEmailView: React.FC<ForgotPasswordEmailViewProps> = ({
  onSignIn,
  onSubmit,
  loading,
}) => {
  const { t } = useTranslation(NAMESPACE_AUTH);

  return (
    <ScreenLayout title="Forgot your password?" loading={loading}>
      <Text style={styles.subtitle}>
        {t(
          "Please write email you used during create account process. We will send you a verification code via sms"
        )}
      </Text>
      <ForgotPasswordEmailForm onSubmit={onSubmit} />
      <Button
        {...attachAccessibilityID("sign-in-button")}
        style={styles.signInButton}
        mode="outlined"
        onPress={onSignIn}>
        {t("Back to sign in page")}
      </Button>
    </ScreenLayout>
  );
};

export default ForgotPasswordEmailView;
