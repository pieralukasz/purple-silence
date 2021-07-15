import { object, SchemaOf, string } from "yup";

import SignUpVerificationFormState from "./SignUpVerificationFormState";

export default (): SchemaOf<SignUpVerificationFormState> =>
  <SchemaOf<SignUpVerificationFormState>>object({
    verificationCode: string().required("REQUIRED"),
  });
