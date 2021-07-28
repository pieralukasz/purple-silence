import { object, SchemaOf, string } from "yup";
import i18n from "i18next";
import { NAMESPACE_VALIDATION } from "@consts/namespaces";

import validateMaxStringLength from "@utils/validation/validateMaxStringLength";
import ForgotPasswordEmailState from "./ForgotPasswordEmailState";

export default (): SchemaOf<ForgotPasswordEmailState> =>
  <SchemaOf<ForgotPasswordEmailState>>object({
    email: string()
      .required(i18n.t(`${NAMESPACE_VALIDATION}:Email is required`))
      .email("Field should be email")
      .test(
        "Maximum email length",
        i18n.t(`${NAMESPACE_VALIDATION}:Email is to long`),
        validateMaxStringLength
      ),
  });
