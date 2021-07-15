import { UnprotectedRoute } from "@screens/routes";
import { ForgotPasswordRoute, SignInRoute, SignUpRoute } from "./routes";

export type UnprotectedNavigatorParams = {
  [UnprotectedRoute]: undefined;
  [SignInRoute]: undefined;
  [SignUpRoute]: undefined;
  [ForgotPasswordRoute]: undefined;
};
