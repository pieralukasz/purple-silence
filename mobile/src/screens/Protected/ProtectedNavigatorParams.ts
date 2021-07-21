import { ProtectedRoute } from "@screens/routes";
import { DashboardRoute } from "./routes";

export type ProtectedNavigatorParams = {
  [DashboardRoute]: undefined;
  [ProtectedRoute]: undefined;
};
