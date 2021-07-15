import { object, SchemaOf, string } from "yup";

import ForgotPasswordEmailState from "./ForgotPasswordEmailState";

export default (): SchemaOf<ForgotPasswordEmailState> =>
  <SchemaOf<ForgotPasswordEmailState>>object({
    email: string().required("REQUIRED"),
  });
