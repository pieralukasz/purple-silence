import React from "react";
import { useForm } from "react-hook-form";

import { useTranslation } from "react-i18next";

import { yupResolver } from "@hookform/resolvers/yup";

import Form from "@components/Form";
import EmailInputField from "@components/Form/EmailInputField";
import PasswordInputField from "@components/Form/PasswordInputField";

import { NAMESPACE_AUTH } from "@consts/namespaces";

import SignInFormState from "./SignInFormState";
import signInFormValidationSchema from "./signInFormValidationSchema";

interface SignInFormProps {
  onSubmit: (data: SignInFormState) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation(NAMESPACE_AUTH);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInFormState>({
    resolver: yupResolver(signInFormValidationSchema()),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  return (
    <Form
      submitButton={{
        text: "Sign in",
        dataTestId: "sign-in-button",
        disabled: !isValid,
        onSubmit: handleSubmit(onSubmit),
      }}>
      <EmailInputField
        name="email"
        control={control}
        error={errors.email}
        errorMessage={errors.email?.message}
      />
      <PasswordInputField
        name="password"
        control={control}
        error={errors.password}
        errorMessage={errors.password?.message}
      />
    </Form>
  );
};

export default SignInForm;
