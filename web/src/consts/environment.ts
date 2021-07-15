const env = process.env.REACT_APP_PURPLE_SILENCE_ENVIRONMENT;

export default {
  development: env?.endsWith("test") || env === "deve",
  graphqlApi: process.env.REACT_APP_PURPLE_SILENCE_AWS_APPSYNC_URL,
};
