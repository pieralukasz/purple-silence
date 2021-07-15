import React from "react";
import { Control, FieldError, FieldValues, Path } from "react-hook-form";

import TextInputField from "@components/Form/TextInputField";
import VerificationCodeIcon from "@assets/icons/VerificationCodeIcon.svg";

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

const VerificationCodeInputField = <T extends FieldValues>({
  autoFocus,
  control,
  dataTestId = "verification-code-input-field",
  disabled,
  error,
  errorMessage,
  label = "Verification Code",
  name,
  placeholder = "Verification Code",
}: Props<T>): JSX.Element => (
  <TextInputField
    autoFocus={autoFocus}
    control={control}
    dataTestId={dataTestId}
    disabled={disabled}
    error={!!error}
    errorMessage={errorMessage}
    label={label}
    leftIcon={<VerificationCodeIcon />}
    name={name}
    placeHolder={placeholder}
  />
);

export default VerificationCodeInputField;
