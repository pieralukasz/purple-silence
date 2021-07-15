import { object, SchemaOf, string } from "yup";

import SignInFormState from "./SignInFormState";

export default (): SchemaOf<SignInFormState> =>
  <SchemaOf<SignInFormState>>object({
    email: string().required("REQUIRED").email("EMAIL"),
    password: string().required("REQUUU"),
  });
