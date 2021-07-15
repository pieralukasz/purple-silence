import React from "react";
import { Button, Text } from "react-native-paper";

import attachAccessibilityID from "@utils/attachAccessibilityID";
import CommonViewProps from "@interfaces/CommonViewProps";
import ScreenLayout from "@layouts/ScreenLayout";

import ForgotPasswordResetForm from "./ForgotPasswordResetForm";
import ForgotPasswordResetFormState from "./ForgotPasswordResetForm/ForgotPasswordResetFormState";
import styles from "./styles";

interface ForgotPasswordResetViewProps
  extends CommonViewProps<ForgotPasswordResetFormState> {
  onCancel: () => void;
}

const ForgotPasswordResetView: React.FC<ForgotPasswordResetViewProps> = ({
  onSubmit,
  onCancel,
  loading,
}) => {
  return (
    <ScreenLayout title="Create new password" loading={loading}>
      <Text style={styles.textInfo}>
        Your password must be 10 or more characters long & contain a mix of
        upper & lower case letters, numbers & symbols.
      </Text>
      <ForgotPasswordResetForm onSubmit={onSubmit} />
      <Button
        {...attachAccessibilityID("cancel-button")}
        mode="outlined"
        onPress={onCancel}
        style={styles.cancelButton}>
        Cancel
      </Button>
    </ScreenLayout>
  );
};

export default ForgotPasswordResetView;
