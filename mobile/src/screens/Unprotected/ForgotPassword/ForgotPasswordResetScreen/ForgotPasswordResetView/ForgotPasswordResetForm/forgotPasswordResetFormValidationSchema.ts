import { object, ref, SchemaOf, string } from "yup";

import passwordValidation from "@utils/passwordValidation/passwordValidation";
import ForgotPasswordResetFormState from "./ForgotPasswordResetFormState";

export default (): SchemaOf<ForgotPasswordResetFormState> =>
  <SchemaOf<ForgotPasswordResetFormState>>object({
    password: passwordValidation(),
    confirmPassword: string().oneOf(
      [ref("password"), null],
      "Passwords must match"
    ),
  });
