import { object, SchemaOf, string, ref } from "yup";
import i18n from "i18next";

import validateMaxStringLength from "@utils/validation/validateMaxStringLength";
import validatePhoneNumber from "@utils/validation/validatePhoneNumber";
import passwordValidation from "@utils/passwordValidation";

import { PHONE_REGEXP } from "@utils/validation/regexp";
import { MAX_STRING_LENGTH } from "@consts/index";
import { NAMESPACE_VALIDATION } from "@consts/namespaces";

import SignUpCreateAccountFormState from "./SignUpCreateAccountFormState";

export default (): SchemaOf<SignUpCreateAccountFormState> =>
  <SchemaOf<SignUpCreateAccountFormState>>object({
    email: string()
      .required(i18n.t(`${NAMESPACE_VALIDATION}:Email is required`))
      .email(i18n.t(`${NAMESPACE_VALIDATION}:Field should be email`))
      .test(
        "Maximum email length",
        i18n.t(`${NAMESPACE_VALIDATION}:Email is to long`),
        validateMaxStringLength
      ),
    phoneNumber: string()
      .required(i18n.t(`${NAMESPACE_VALIDATION}:Phone number is required`))
      .test(
        "Phone number format",
        i18n.t(`${NAMESPACE_VALIDATION}:Phone number is incorrect`),
        validatePhoneNumber()
      )
      .matches(
        PHONE_REGEXP,
        i18n.t(`${NAMESPACE_VALIDATION}:Provide valid phone number`)
      )
      .max(
        MAX_STRING_LENGTH,
        i18n.t(`${NAMESPACE_VALIDATION}:Phone number is to long`)
      ),
    password: passwordValidation(),
    confirmPassword: string().oneOf(
      [ref("password"), null],
      i18n.t(`${NAMESPACE_VALIDATION}:Passwords must match`)
    ),
  });
