import React from "react";
import { View } from "react-native";
import { useTranslation } from "react-i18next";

import { Button, Text } from "react-native-paper";

import attachAccessibilityID from "@utils/attachAccessibilityID";
import CommonViewProps from "@interfaces/CommonViewProps";
import ScreenLayout from "@layouts/ScreenLayout";

import { NAMESPACE_AUTH } from "@consts/namespaces";

import SignUpVerificationForm from "./SignUpVerificationForm";
import SignUpVerificationFormState from "./SignUpVerificationForm/SignUpVerificationFormState";
import styles from "./styles";

interface SignUpVerificationViewProps
  extends CommonViewProps<SignUpVerificationFormState> {
  email: string;
  onResendCode: () => void;
}

const SignUpVerificationView: React.FC<SignUpVerificationViewProps> = ({
  onSubmit,
  loading,
  email,
  onResendCode,
}) => {
  const { t } = useTranslation(NAMESPACE_AUTH);

  return (
    <ScreenLayout title={t("Enter verification code")} loading={loading}>
      <View style={styles.textContainer}>
        <Text style={styles.textInfo}>
          {t("A verification code has been sent to:")}
        </Text>
        <Text style={{ ...styles.textInfo, ...styles.textPhoneNumber }}>
          {email}
        </Text>
        <Text style={styles.textInfo}>
          {t("Please, enter it below, to verify your account")}.
        </Text>
      </View>
      <SignUpVerificationForm onSubmit={onSubmit} />
      <Button
        {...attachAccessibilityID("resend-email-button")}
        mode="outlined"
        onPress={onResendCode}
        style={styles.resendButton}>
        {t("Resend verification code")}
      </Button>
    </ScreenLayout>
  );
};

export default SignUpVerificationView;
