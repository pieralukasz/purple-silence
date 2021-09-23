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
  [ForgotPasswordVerificationRoute]: {
    email: string;
  };
  [ForgotPasswordResetRoute]: {
    email: string;
    verificationCode: string;
  };
  [ForgotPasswordSuccessRoute]: undefined;
};
