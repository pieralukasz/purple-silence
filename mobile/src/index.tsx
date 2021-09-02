import "react-native-gesture-handler";
import { AppRegistry, LogBox } from "react-native";
import App from "./App";
import { name as appName } from "../app.json";
import configureAws from "./awsConfig";
import "@i18n/instance";

LogBox.ignoreLogs([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps has been renamed",
  "requires main queue setup since it overrides",
  "Non-serializable values were found in the navigation state",
]);

configureAws();
AppRegistry.registerComponent(appName, () => App);
