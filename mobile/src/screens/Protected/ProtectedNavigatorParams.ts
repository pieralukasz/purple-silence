import { ProtectedRoute } from "@screens/routes";
import { testProtectedRoute } from "@screens/Protected/routes";

export type ProtectedNavigatorParams = {
  [ProtectedRoute]: undefined;
  [testProtectedRoute]: undefined;
};
