import { object, SchemaOf, string } from "yup";

import ForgotPasswordVerificationFormState from "./ForgotPasswordVerificationFormState";

export default (): SchemaOf<ForgotPasswordVerificationFormState> =>
  <SchemaOf<ForgotPasswordVerificationFormState>>object({
    verificationCode: string().required("REQUIRED"),
  });
