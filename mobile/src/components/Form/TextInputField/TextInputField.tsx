import React from "react";
import { HelperText, TextInput } from "react-native-paper";
import { Control, FieldValues, Controller, Path } from "react-hook-form";
import attachAccessibilityID from "@utils/attachAccessibilityID";

interface Props<T extends FieldValues> {
  autoFocus?: boolean;
  control: Control<T>;
  dataTestId: string;
  disabled?: boolean;
  error: boolean;
  errorMessage?: string;
  label: string;
  leftIcon?: JSX.Element;
  multiline?: boolean;
  name: Path<T>;
  onPressRightIcon?: () => void;
  placeHolder?: string;
  rightIcon?: JSX.Element;
  secureTextEntry?: boolean;
}

const TextInputField = <T extends FieldValues>({
  autoFocus = false,
  control,
  dataTestId,
  disabled = false,
  error,
  errorMessage,
  label,
  leftIcon,
  multiline = false,
  name,
  onPressRightIcon,
  placeHolder = undefined,
  rightIcon,
  secureTextEntry = false,
}: Props<T>): JSX.Element => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, onBlur } }) => (
      <>
        <TextInput
          {...attachAccessibilityID(dataTestId)}
          label={label}
          placeholder={placeHolder}
          mode="outlined"
          error={error}
          autoFocus={autoFocus}
          multiline={multiline}
          disabled={disabled}
          onChangeText={onChange}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
          left={leftIcon && <TextInput.Icon name={() => leftIcon} />}
          right={
            rightIcon && (
              <TextInput.Icon
                name={() => rightIcon}
                onPress={onPressRightIcon}
              />
            )
          }
        />
        <HelperText type="error" visible={error}>
          {errorMessage}
        </HelperText>
      </>
    )}
  />
);

export default TextInputField;
