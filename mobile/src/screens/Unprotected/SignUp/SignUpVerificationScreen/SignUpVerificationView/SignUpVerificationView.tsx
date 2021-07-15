import React from "react";
import { View } from "react-native";

import { Button, Text } from "react-native-paper";

import attachAccessibilityID from "@utils/attachAccessibilityID";
import CommonViewProps from "@interfaces/CommonViewProps";
import ScreenLayout from "@layouts/ScreenLayout";

import SignUpVerificationForm from "./SignUpVerificationForm";
import SignUpVerificationFormState from "./SignUpVerificationForm/SignUpVerificationFormState";
import styles from "./styles";

interface SignUpVerificationViewProps
  extends CommonViewProps<SignUpVerificationFormState> {
  phoneNumber: string | number;
  onResendCode: () => void;
}

const SignUpVerificationView: React.FC<SignUpVerificationViewProps> = ({
  onSubmit,
  loading,
  phoneNumber,
  onResendCode,
}) => {
  return (
    <ScreenLayout title="Enter verification code" loading={loading}>
      <View style={styles.textContainer}>
        <Text style={styles.textInfo}>
          A verification code has been sent to:
        </Text>
        <Text style={{ ...styles.textInfo, ...styles.textPhoneNumber }}>
          {phoneNumber}
        </Text>
        <Text style={styles.textInfo}>
          Please, enter it below, to verify your account.
        </Text>
      </View>
      <SignUpVerificationForm onSubmit={onSubmit} />
      <Button
        {...attachAccessibilityID("resend-email-button")}
        mode="outlined"
        onPress={onResendCode}
        style={styles.resendButton}>
        Resend verification code
      </Button>
    </ScreenLayout>
  );
};

export default SignUpVerificationView;
