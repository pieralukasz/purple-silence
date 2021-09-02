import { SignUpRoute } from "@screens/Unprotected/routes";
import {
  SignUpCreateAccountRoute,
  SignUpSuccessRoute,
  SignUpVerificationRoute,
} from "./routes";

export type SignUpNavigatorParams = {
  [SignUpRoute]: undefined;
  [SignUpCreateAccountRoute]: undefined;
  [SignUpVerificationRoute]: {
    email: string;
  };
  [SignUpSuccessRoute]: undefined;
};
