import React from "react";
import { View } from "react-native";

import { Button, Text } from "react-native-paper";

import attachAccessibilityID from "@utils/attachAccessibilityID";
import CommonViewProps from "@interfaces/CommonViewProps";
import ScreenLayout from "@layouts/ScreenLayout";

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
  return (
    <ScreenLayout title="Sign In" loading={loading}>
      <SignInForm onSubmit={onSubmit} />
      <View style={styles.forgotPassword}>
        <Button
          {...attachAccessibilityID("forgot-password-button")}
          mode="text"
          onPress={onForgotPassword}>
          Forgot Password?
        </Button>
      </View>
      <View style={styles.signUp}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <Button
          {...attachAccessibilityID("go-to-sign-up-page-button")}
          mode="outlined"
          onPress={onSignUp}>
          SIGN UP
        </Button>
      </View>
    </ScreenLayout>
  );
};

export default SignInView;
