import React from "react";
import { View } from "react-native";
import { useTranslation } from "react-i18next";

import { Button, Text } from "react-native-paper";

import attachAccessibilityID from "@utils/attachAccessibilityID";
import CommonViewProps from "@interfaces/CommonViewProps";
import ScreenLayout from "@layouts/ScreenLayout";
import { NAMESPACE_AUTH } from "@consts/namespaces";

import ForgotPasswordVerificationForm from "./ForgotPasswordVerificationForm";
import ForgotPasswordVerificationFormState from "./ForgotPasswordVerificationForm/ForgotPasswordVerificationFormState";
import styles from "./styles";

interface ForgotPasswordVerificationCodeViewProps
  extends CommonViewProps<ForgotPasswordVerificationFormState> {
  email: string;
  onResendCode: () => void;
}

const ForgotPasswordVerificationView: React.FC<ForgotPasswordVerificationCodeViewProps> =
  ({ onSubmit, email, onResendCode, loading }) => {
    const { t } = useTranslation(NAMESPACE_AUTH);

    return (
      <ScreenLayout title="Enter the verification code" loading={loading}>
        <View style={styles.textContainer}>
          <Text style={styles.textInfo}>
            {t("A verification code has been sent to:")}
          </Text>
          <Text style={{ ...styles.textInfo, ...styles.textPhoneNumber }}>
            {email}
          </Text>
          <Text style={styles.textInfo}>
            {t("Please, enter it below, to verify your account.")}
          </Text>
        </View>
        <ForgotPasswordVerificationForm onSubmit={onSubmit} />
        <Button
          {...attachAccessibilityID("forgot-password-resend-button")}
          mode="outlined"
          onPress={onResendCode}
          style={styles.resendButton}>
          {t("Resend verification code")}
        </Button>
      </ScreenLayout>
    );
  };

export default ForgotPasswordVerificationView;
