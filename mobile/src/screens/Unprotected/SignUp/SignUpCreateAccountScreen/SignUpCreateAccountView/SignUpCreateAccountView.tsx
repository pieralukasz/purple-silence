import React from "react";
import { View } from "react-native";

import { Button, Text } from "react-native-paper";

import attachAccessibilityID from "@utils/attachAccessibilityID";
import CommonViewProps from "@interfaces/CommonViewProps";
import ScreenLayout from "@layouts/ScreenLayout";

import SignUpCreateAccountForm from "./SignUpCreateAccountForm";
import SignUpCreateAccountFormState from "./SignUpCreateAccountForm/SignUpCreateAccountFormState";
import styles from "./styles";

interface SignUpCreateAccountViewProps
  extends CommonViewProps<SignUpCreateAccountFormState> {
  onSignIn: () => void;
}

const SignUpCreateAccountView: React.FC<SignUpCreateAccountViewProps> = ({
  onSubmit,
  onSignIn,
  loading,
}) => {
  return (
    <ScreenLayout title="Create your account" loading={loading}>
      <SignUpCreateAccountForm onSubmit={onSubmit} />
      <View style={styles.signIn}>
        <Text style={styles.signInText}>Already have an account?</Text>
        <Button
          {...attachAccessibilityID("sign-in-button")}
          mode="outlined"
          onPress={onSignIn}>
          Sign in
        </Button>
      </View>
    </ScreenLayout>
  );
};

export default SignUpCreateAccountView;
