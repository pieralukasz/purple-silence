import React from "react";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import attachAccessibilityID from "@utils/attachAccessibilityID";
import FormButton from "@interfaces/FormButton";
import Success from "@assets/images/Success.svg";
import Title from "@components/Title";

import styles from "./styles";

interface SuccessScreenProps {
  submitButton: FormButton;
  title: string;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({
  submitButton: { dataTestId, onSubmit, text, disabled },
  title,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Success />
      <Title titleStyles={styles.title}>{title}</Title>
      <Button
        {...attachAccessibilityID(dataTestId)}
        mode="contained"
        style={styles.button}
        onPress={onSubmit}
        disabled={disabled}>
        {text}
      </Button>
    </SafeAreaView>
  );
};

export default SuccessScreen;
