import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { yupResolver } from "@hookform/resolvers/yup";

import Form from "@components/Form";
import EmailInputField from "@components/Form/EmailInputField";
import PhoneNumberField from "@components/Form/PhoneNumberField";
import PasswordInputField from "@components/Form/PasswordInputField";

import { NAMESPACE_AUTH, NAMESPACE_FIELD } from "@consts/namespaces";

import signUpCreateAccountFormValidationSchema from "./signUpCreateAccountFormValidationSchema";

import SignUpCreateAccountFormState from "./SignUpCreateAccountFormState";

interface SignUpCreateAccountFormProps {
  onSubmit: (data: SignUpCreateAccountFormState) => void;
}

const SignUpCreateAccountForm: React.FC<SignUpCreateAccountFormProps> = ({
  onSubmit,
}) => {
  const { t } = useTranslation([NAMESPACE_AUTH, NAMESPACE_FIELD]);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpCreateAccountFormState>({
    resolver: yupResolver(signUpCreateAccountFormValidationSchema()),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  return (
    <Form
      submitButton={{
        text: t("Sign Up"),
        dataTestId: "sign-up-button",
        onSubmit: handleSubmit(onSubmit),
        disabled: !isValid,
      }}>
      <EmailInputField
        name="email"
        control={control}
        error={errors.email}
        errorMessage={errors.email?.message}
      />
      <PhoneNumberField
        name="phoneNumber"
        control={control}
        error={errors.phoneNumber}
        errorMessage={errors.phoneNumber?.message}
      />
      <PasswordInputField
        name="password"
        control={control}
        error={errors.password}
        errorMessage={errors.password?.message}
      />
      <PasswordInputField
        name="confirmPassword"
        dataTestId="confirm-password-input-field"
        control={control}
        error={errors.confirmPassword}
        errorMessage={errors.confirmPassword?.message}
        placeholder={t(`${NAMESPACE_FIELD}:Confirm Password`)}
        label={t(`${NAMESPACE_FIELD}:Confirm Password`)}
      />
    </Form>
  );
};

export default SignUpCreateAccountForm;
