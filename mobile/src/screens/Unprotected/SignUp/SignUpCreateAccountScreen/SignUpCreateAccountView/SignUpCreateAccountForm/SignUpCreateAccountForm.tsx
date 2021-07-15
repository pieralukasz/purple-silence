import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import Form from "@components/Form";
import EmailInputField from "@components/Form/EmailInputField";
import PhoneNumberField from "@components/Form/PhoneNumberField";
import PasswordInputField from "@components/Form/PasswordInputField";
import signInFormValidationSchema from "@screens/Unprotected/SignInScreen/SignInView/SignInForm/signInFormValidationSchema";

import SignUpCreateAccountFormState from "./SignUpCreateAccountFormState";

interface SignUpCreateAccountFormProps {
  onSubmit: (data: SignUpCreateAccountFormState) => void;
}

const SignUpCreateAccountForm: React.FC<SignUpCreateAccountFormProps> = ({
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpCreateAccountFormState>({
    resolver: yupResolver(signInFormValidationSchema()),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  return (
    <Form
      submitButton={{
        text: "Sign up",
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
        placeholder="Confirm Password"
        label="Confirm Password"
      />
    </Form>
  );
};

export default SignUpCreateAccountForm;
