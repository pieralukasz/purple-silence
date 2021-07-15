import { object, SchemaOf, string } from "yup";

import SignUpCreateAccountFormState from "./SignUpCreateAccountFormState";

export default (): SchemaOf<SignUpCreateAccountFormState> =>
  <SchemaOf<SignUpCreateAccountFormState>>object({
    email: string().required("REQUIRED"),
    phoneNumber: string().required("REQUIRED"),
    password: string().required("REQUIRED"),
    confirmPassword: string().required("REQUIRED"),
  });
