import { ProtectedRoute } from "@screens/routes";
import { DashboardRoute, SettingsRoute } from "./routes";

export type ProtectedNavigatorParams = {
  [SettingsRoute]: undefined;
  [DashboardRoute]: undefined;
  [ProtectedRoute]: undefined;
};
