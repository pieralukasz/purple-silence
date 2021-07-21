import { string } from "yup";
import StringSchema from "yup/lib/string";

import { MAX_STRING_LENGTH, MIN_STRING_LENGTH } from "@consts/index";

export default (): StringSchema<
  string | undefined,
  Record<string, unknown>,
  string | undefined
> =>
  string()
    .required("Password is required")
    .matches(/[a-z]/, "Your password should contain lower case letters")
    .matches(/[A-Z]/, "Your password should contain upper case letters")
    .matches(/\d/, "Your password should contain digits")
    .min(MIN_STRING_LENGTH, "Your password is too short")
    .max(MAX_STRING_LENGTH, "Your password is too long");
