import {
  ErrorRoute,
  MainRoute,
  ProtectedRoute,
  UnprotectedRoute,
} from "./routes";

export type MainNavigatorParams = {
  [MainRoute]: undefined;
  [ProtectedRoute]: undefined;
  [UnprotectedRoute]: undefined;
  [ErrorRoute]: undefined;
};
