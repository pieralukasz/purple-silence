import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "@components/Form";
import VerificationCodeInputField from "@components/Form/VerificationCodeInputField";

import signUpVerificationFormValidationSchema from "./signUpVerificationFormValidationSchema";
import SignUpVerificationFormState from "./SignUpVerificationFormState";

interface SignUpVerificationFormProps {
  onSubmit: (data: SignUpVerificationFormState) => void;
}

const SignUpVerificationForm: React.FC<SignUpVerificationFormProps> = ({
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpVerificationFormState>({
    resolver: yupResolver(signUpVerificationFormValidationSchema()),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  return (
    <Form
      submitButton={{
        text: "Submit",
        dataTestId: "sign-up-verification-button",
        disabled: !isValid,
        onSubmit: handleSubmit(onSubmit),
      }}>
      <VerificationCodeInputField
        name="verificationCode"
        control={control}
        error={errors.verificationCode}
        errorMessage={errors.verificationCode?.message}
      />
    </Form>
  );
};

export default SignUpVerificationForm;
