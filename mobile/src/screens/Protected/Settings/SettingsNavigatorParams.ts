import { SettingsRoute } from "@screens/Protected/routes";
import { SettingsMainRoute, SettingsNotificationRoute } from "./routes";

export type SettingsNavigatorParams = {
  [SettingsNotificationRoute]: undefined;
  [SettingsRoute]: undefined;
  [SettingsMainRoute]: undefined;
};
