import { object, ref, SchemaOf, string } from "yup";

import passwordValidation from "@utils/passwordValidation/passwordValidation";
import ForgotPasswordResetFormState from "./ForgotPasswordResetFormState";
import i18n from "i18next";
import { NAMESPACE_VALIDATION } from "@consts/namespaces";

export default (): SchemaOf<ForgotPasswordResetFormState> =>
  <SchemaOf<ForgotPasswordResetFormState>>object({
    password: passwordValidation(),
    confirmPassword: string().oneOf(
      [ref("password"), null],
      i18n.t(`${NAMESPACE_VALIDATION}:Passwords must match`)
    ),
  });
