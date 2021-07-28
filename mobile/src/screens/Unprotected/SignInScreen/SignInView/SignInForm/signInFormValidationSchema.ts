import { object, SchemaOf, string } from "yup";
import i18n from "i18next";
import { NAMESPACE_VALIDATION } from "@consts/namespaces";

import validateMaxStringLength from "@utils/validation/validateMaxStringLength";

import SignInFormState from "./SignInFormState";

export default (): SchemaOf<SignInFormState> =>
  <SchemaOf<SignInFormState>>object({
    email: string()
      .required(i18n.t(`${NAMESPACE_VALIDATION}:Email is required`))
      .email(i18n.t(`${NAMESPACE_VALIDATION}:Field should be email`))
      .test(
        "Maximum email length",
        i18n.t(`${NAMESPACE_VALIDATION}:Email is to long`),
        validateMaxStringLength
      ),
    password: string()
      .required(i18n.t(`${NAMESPACE_VALIDATION}:Password is required`))
      .test(
        "Maximum password length",
        i18n.t(`${NAMESPACE_VALIDATION}:Your password is to long`),
        validateMaxStringLength
      ),
  });
