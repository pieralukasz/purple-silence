import React from "react";
import { useForm } from "react-hook-form";
import Form from "@components/Form";
import { yupResolver } from "@hookform/resolvers/yup";

import PasswordInputField from "@components/Form/PasswordInputField";

import forgotPasswordResetFormValidationSchema from "./forgotPasswordResetFormValidationSchema";
import ForgotPasswordResetFormState from "./ForgotPasswordResetFormState";

interface ForgotPasswordResetFormProps {
  onSubmit: (data: ForgotPasswordResetFormState) => void;
}

const ForgotPasswordResetForm: React.FC<ForgotPasswordResetFormProps> = ({
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ForgotPasswordResetFormState>({
    resolver: yupResolver(forgotPasswordResetFormValidationSchema()),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  return (
    <Form
      submitButton={{
        text: "Save",
        dataTestId: "save-button",
        onSubmit: handleSubmit(onSubmit),
        disabled: !isValid,
      }}>
      <PasswordInputField
        control={control}
        name="password"
        error={errors.password}
        errorMessage={errors.password?.message}
      />
      <PasswordInputField
        control={control}
        name="confirmPassword"
        error={errors.confirmPassword}
        errorMessage={errors.confirmPassword?.message}
      />
    </Form>
  );
};

export default ForgotPasswordResetForm;
