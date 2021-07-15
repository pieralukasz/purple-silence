import React from "react";
import { View } from "react-native";

import { Button } from "react-native-paper";

import attachAccessibilityID from "@utils/attachAccessibilityID";
import FormButton from "@interfaces/FormButton";

import styles from "./styles";

interface FormProps {
  submitButton: FormButton;
}

const Form: React.FC<FormProps> = ({
  children,
  submitButton: { disabled, onSubmit, text, dataTestId },
}) => {
  return (
    <View>
      {children}
      <Button
        {...attachAccessibilityID(dataTestId ?? "submit-button")}
        mode="contained"
        disabled={disabled}
        style={styles.submitButton}
        onPress={onSubmit}>
        {text || "Submit"}
      </Button>
    </View>
  );
};

export default Form;
