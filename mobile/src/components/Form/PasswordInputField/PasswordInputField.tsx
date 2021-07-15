import React, { useCallback, useState } from "react";
import { Control, FieldError, FieldValues, Path } from "react-hook-form";

import TextInputField from "@components/Form/TextInputField";
import PasswordIcon from "@assets/icons/PasswordIcon.svg";
import PasswordInvisibleIcon from "@assets/icons/PasswordInvisibleIcon.svg";
import PasswordVisibilityIcon from "@assets/icons/PasswordVisibleIcon.svg";

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
  showVisibility?: boolean;
}

const PasswordInputField = <T extends FieldValues>({
  autoFocus,
  control,
  dataTestId = "password-input-field",
  disabled,
  error,
  errorMessage,
  label = "Password",
  name,
  placeholder = "Password",
  showVisibility = true,
}: Props<T>): JSX.Element => {
  const [visibility, setVisibility] = useState<boolean>(true);

  const renderEyeIcon = useCallback(() => {
    return visibility ? <PasswordVisibilityIcon /> : <PasswordInvisibleIcon />;
  }, [visibility]);

  return (
    <TextInputField
      autoFocus={autoFocus}
      control={control}
      dataTestId={dataTestId}
      disabled={disabled}
      error={!!error}
      errorMessage={errorMessage}
      label={label}
      leftIcon={<PasswordIcon />}
      name={name}
      onPressRightIcon={() => setVisibility(!visibility)}
      placeHolder={placeholder}
      rightIcon={showVisibility ? renderEyeIcon() : undefined}
      secureTextEntry={visibility}
    />
  );
};

export default PasswordInputField;
