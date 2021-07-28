import { ForgotPasswordRoute } from "@screens/Unprotected/routes";
import {
  ForgotPasswordEmailRoute,
  ForgotPasswordResetRoute,
  ForgotPasswordSuccessRoute,
  ForgotPasswordVerificationRoute,
} from "./routes";

export type ForgotPasswordNavigatorParams = {
  [ForgotPasswordRoute]: undefined;
  [ForgotPasswordEmailRoute]: undefined;
  [ForgotPasswordVerificationRoute]: undefined;
  [ForgotPasswordResetRoute]: undefined;
  [ForgotPasswordSuccessRoute]: undefined;
};
