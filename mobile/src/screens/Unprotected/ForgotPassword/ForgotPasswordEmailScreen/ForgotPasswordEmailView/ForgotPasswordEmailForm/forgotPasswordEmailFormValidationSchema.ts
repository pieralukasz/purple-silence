import { object, SchemaOf, string } from "yup";

import validateMaxStringLength from "@utils/validation/validateMaxStringLength";
import ForgotPasswordEmailState from "./ForgotPasswordEmailState";

export default (): SchemaOf<ForgotPasswordEmailState> =>
  <SchemaOf<ForgotPasswordEmailState>>object({
    email: string()
      .required("Email is required")
      .email("Field should be email")
      .test(
        "Maximum email length",
        "Email is to long",
        validateMaxStringLength
      ),
  });
