import { object, SchemaOf, string } from "yup";

import validateMaxStringLength from "@utils/validation/validateMaxStringLength";

import SignInFormState from "./SignInFormState";

// TODO Add i18n
export default (): SchemaOf<SignInFormState> =>
  <SchemaOf<SignInFormState>>object({
    email: string()
      .required("Email is required")
      .email("Field should be email")
      .test(
        "Maximum email length",
        "Email is to long",
        validateMaxStringLength
      ),
    password: string()
      .required("Password is required")
      .test(
        "Maximum password length",
        "Your password is to long",
        validateMaxStringLength
      ),
  });
