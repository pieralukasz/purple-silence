import React from "react";
import { useForm } from "react-hook-form";
import Form from "@components/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import PasswordInputField from "@components/Form/PasswordInputField";

import { NAMESPACE_AUTH } from "@consts/namespaces";

import forgotPasswordResetFormValidationSchema from "./forgotPasswordResetFormValidationSchema";
import ForgotPasswordResetFormState from "./ForgotPasswordResetFormState";

interface ForgotPasswordResetFormProps {
  onSubmit: (data: ForgotPasswordResetFormState) => void;
}

const ForgotPasswordResetForm: React.FC<ForgotPasswordResetFormProps> = ({
  onSubmit,
}) => {
  const { t } = useTranslation(NAMESPACE_AUTH);

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
        text: t("Save"),
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
