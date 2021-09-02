import React, { useCallback, useState } from "react";
import Selector from "@components/Selector";
import { SelectorProps } from "@components/Selector/Selector";
import {
  Dialog,
  Portal,
  Paragraph,
  RadioButton,
  Text,
} from "react-native-paper";
import { View } from "react-native";
import theme from "@themes/defaultTheme";
import RadioGroup from "@components/RadioButton/RadioButtonGroup";
import { RadioButtonProps } from "@components/RadioButton";

interface DialogSelectorProps extends Omit<SelectorProps, "onPress"> {
  dataTestId: string;
  dialogSubtitle?: string;
  dialogTitle: string;
  onChange: (selectedValue: string) => void;
  radioButtons: RadioButtonProps[];
  value?: string;
}

const DialogSelector: React.FC<DialogSelectorProps> = ({
  dataTestId,
  dialogSubtitle,
  dialogTitle,
  onChange,
  radioButtons,
  reference,
  title,
  value,
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const onPressRadioButton = useCallback(
    (radioButtonsArray: RadioButtonProps[]) => {
      const selected = radioButtonsArray.find((radio) => radio.selected);
      if (selected && selected.value) {
        onChange(selected.value);
      }
      hideDialog();
    },
    [onChange]
  );

  return (
    <>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>{dialogTitle}</Dialog.Title>
          <Dialog.Content>
            {dialogSubtitle && <Paragraph>{dialogSubtitle}</Paragraph>}
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
            />
          </Dialog.Content>
        </Dialog>
      </Portal>
      <Selector
        dataTestId={dataTestId}
        onPress={showDialog}
        reference={reference}
        title={title}
        value={value}
      />
    </>
  );
};

export default DialogSelector;
