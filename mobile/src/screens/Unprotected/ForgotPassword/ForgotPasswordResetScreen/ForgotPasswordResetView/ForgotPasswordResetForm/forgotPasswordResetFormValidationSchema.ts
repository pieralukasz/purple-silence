import { object, SchemaOf, string } from "yup";

import ForgotPasswordResetFormState from "./ForgotPasswordResetFormState";

export default (): SchemaOf<ForgotPasswordResetFormState> =>
  <SchemaOf<ForgotPasswordResetFormState>>object({
    password: string().required("REQUIRED"),
    confirmPassword: string().required("REQUIRED"),
  });
