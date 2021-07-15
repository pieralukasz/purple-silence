import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "@components/Form";
import VerificationCodeInputField from "@components/Form/VerificationCodeInputField";

import forgotPasswordVerificationFormValidationSchema from "./forgotPasswordVerificationFormValidationSchema";
import ForgotPasswordVerificationFormState from "./ForgotPasswordVerificationFormState";

interface SignUpVerificationFormProps {
  onSubmit: (data: ForgotPasswordVerificationFormState) => void;
}

const ForgotPasswordVerificationForm: React.FC<SignUpVerificationFormProps> = ({
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ForgotPasswordVerificationFormState>({
    resolver: yupResolver(forgotPasswordVerificationFormValidationSchema()),
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

export default ForgotPasswordVerificationForm;
