const env = process.env.REACT_APP_DIDACTIC_BARNACLE_ENVIRONMENT;

export default {
  development: env?.endsWith("test") || env === "deve",
  graphqlApi: process.env.REACT_APP_DIDACTIC_BARNACLE_AWS_APPSYNC_URL,
};
