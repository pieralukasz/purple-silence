import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import Form from "@components/Form";
import EmailInputField from "@components/Form/EmailInputField";

import { NAMESPACE_AUTH } from "@consts/namespaces";

import forgotPasswordEmailFormValidationSchema from "./forgotPasswordEmailFormValidationSchema";
import ForgotPasswordEmailState from "./ForgotPasswordEmailState";

interface ForgotPasswordEmailFormProps {
  onSubmit: (data: ForgotPasswordEmailState) => void;
}

const ForgotPasswordEmailForm: React.FC<ForgotPasswordEmailFormProps> = ({
  onSubmit,
}) => {
  const { t } = useTranslation(NAMESPACE_AUTH);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ForgotPasswordEmailState>({
    resolver: yupResolver(forgotPasswordEmailFormValidationSchema()),
    mode: "onTouched",
    reValidateMode: "onChange",
  });
  return (
    <Form
      submitButton={{
        text: t("Send verification code"),
        dataTestId: "forgot-password-button",
        disabled: !isValid,
        onSubmit: handleSubmit(onSubmit),
      }}>
      <EmailInputField
        name="email"
        control={control}
        error={errors.email}
        errorMessage={errors.email?.message}
      />
    </Form>
  );
};

export default ForgotPasswordEmailForm;
