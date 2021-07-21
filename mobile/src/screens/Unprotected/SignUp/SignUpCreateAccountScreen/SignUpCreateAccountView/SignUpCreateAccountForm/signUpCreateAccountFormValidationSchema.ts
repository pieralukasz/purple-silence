import { object, SchemaOf, string, ref } from "yup";

import { MAX_STRING_LENGTH } from "@consts/index";
import validateMaxStringLength from "@utils/validation/validateMaxStringLength";
import validatePhoneNumber from "@utils/validation/validatePhoneNumber";
import { PHONE_REGEXP } from "@utils/validation/regexp";
import passwordValidation from "@utils/passwordValidation";

import SignUpCreateAccountFormState from "./SignUpCreateAccountFormState";

export default (): SchemaOf<SignUpCreateAccountFormState> =>
  <SchemaOf<SignUpCreateAccountFormState>>object({
    email: string()
      .required("Email is required")
      .email("Field should be email")
      .test(
        "Maximum email length",
        "Email is to long",
        validateMaxStringLength
      ),
    phoneNumber: string()
      .required("Phone number is required")
      .test(
        "Phone number format",
        "Phone number is incorrect",
        validatePhoneNumber()
      )
      .matches(PHONE_REGEXP, "Provide valid phone number")
      .max(MAX_STRING_LENGTH, "Phone number is to long"),
    password: passwordValidation(),
    confirmPassword: string().oneOf(
      [ref("password"), null],
      "Passwords must match"
    ),
  });
