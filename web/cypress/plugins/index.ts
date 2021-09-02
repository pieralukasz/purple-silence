import dotenv from "dotenv";

// @ts-ignore
import codeCoverageTask from "@cypress/code-coverage/task";

dotenv.config({ path: ".env.test" });

export default (on: any, config: any) => {
  config.baseUrl = process.env.BASE_URL;
  config.env.default_password = process.env.DEFAULT_PASSWORD;
  config.env.aws_cognito_user_pool_id = process.env.AWS_COGNITO_USER_POOL_ID;

  config = codeCoverageTask(on, config);
  return config;
};
