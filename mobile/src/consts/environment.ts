import {
  REACT_APP_PURPLE_SILENCE_ENVIRONMENT,
  REACT_APP_PURPLE_SILENCE_AWS_APPSYNC_URL,
} from "@env";

const env = REACT_APP_PURPLE_SILENCE_ENVIRONMENT;

export default {
  development: env?.endsWith("test") || env === "deve",
  graphqlApi: REACT_APP_PURPLE_SILENCE_AWS_APPSYNC_URL,
};
