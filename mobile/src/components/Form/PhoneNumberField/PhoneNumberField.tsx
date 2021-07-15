import React from "react";
import { Control, FieldError, FieldValues, Path } from "react-hook-form";

import TextInputField from "@components/Form/TextInputField";
import PhoneIcon from "@assets/icons/PhoneIcon.svg";

interface Props<T extends FieldValues> {
  autoFocus?: boolean;
  control: Control<T>;
  dataTestId?: string;
  disabled?: boolean;
  error?: FieldError;
  errorMessage?: string;
  label?: string;
  name: Path<T>;
  placeholder?: string;
}

const PhoneNumberInputField = <T extends FieldValues>({
  autoFocus,
  control,
  dataTestId = "phone-number-input-field",
  disabled,
  error,
  errorMessage,
  label = "Phone",
  name,
  placeholder = "Phone",
}: Props<T>): JSX.Element => (
  <TextInputField
    autoFocus={autoFocus}
    control={control}
    dataTestId={dataTestId}
    disabled={disabled}
    error={!!error}
    errorMessage={errorMessage}
    label={label}
    leftIcon={<PhoneIcon />}
    name={name}
    placeHolder={placeholder}
  />
);

export default PhoneNumberInputField;
