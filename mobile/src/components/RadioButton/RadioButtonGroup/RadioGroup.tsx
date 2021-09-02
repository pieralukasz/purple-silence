import React, { useState, useEffect } from "react";
import { View } from "react-native";
import _ from "lodash";

import RadioButton, { RadioButtonProps, RadioGroupProps } from "../index";

import styles from "./styles";

const RadioGroup: React.FC<RadioGroupProps> = ({
  containerStyle,
  layout = "column",
  onPress,
  radioButtons,
}) => {
  const [radioButtonsLocal, setRadioButtonsLocal] =
    useState<RadioButtonProps[]>(radioButtons);

  function handlePress(id: string) {
    // eslint-disable-next-line no-restricted-syntax
    for (const button of radioButtonsLocal) {
      if (button.selected && button.id === id) return;
      button.selected = button.id === id;
    }
    setRadioButtonsLocal([...radioButtonsLocal]);
    if (onPress) {
      onPress(radioButtonsLocal);
    }
  }

  useEffect(() => {
    if (!_.isEqual(radioButtons, radioButtonsLocal)) {
      setRadioButtonsLocal(radioButtons);
    }
  }, [radioButtons, radioButtonsLocal]);

  return (
    <View style={[styles.container, { flexDirection: layout }, containerStyle]}>
      {radioButtonsLocal.map((button) => (
        <RadioButton
          {...button}
          key={button.id}
          onPress={handlePress}
          dataTestId={button.dataTestId}
        />
      ))}
    </View>
  );
};

export default RadioGroup;
