import Amplify, { Analytics, Auth } from "aws-amplify";

import {
  REACT_APP_PURPLE_SILENCE_AWS_COGNITO_IDENTITY_POOL,
  REACT_APP_PURPLE_SILENCE_AWS_COGNITO_REGION,
  REACT_APP_PURPLE_SILENCE_AWS_COGNITO_USER_POOL_ID,
  REACT_APP_PURPLE_SILENCE_AWS_COGNITO_USER_POOL_CLIENT_ID,
  REACT_APP_PURPLE_SILENCE_AWS_COGNITO_USER_POOL_DOMAIN,
  REACT_APP_PURPLE_SILENCE_AWS_PINPOINT_PROJECT,
  REACT_APP_PURPLE_SILENCE_AWS_PINPOINT_REGION,
} from "@env";

export const authConfig = {
  Auth: {
    identityPoolId: REACT_APP_PURPLE_SILENCE_AWS_COGNITO_IDENTITY_POOL,
    region: REACT_APP_PURPLE_SILENCE_AWS_COGNITO_REGION,
    userPoolId: REACT_APP_PURPLE_SILENCE_AWS_COGNITO_USER_POOL_ID,
    userPoolWebClientId:
      REACT_APP_PURPLE_SILENCE_AWS_COGNITO_USER_POOL_CLIENT_ID,
    oauth: {
      domain: REACT_APP_PURPLE_SILENCE_AWS_COGNITO_USER_POOL_DOMAIN,
      responseType: "code",
      scope: [
        "phone",
        "email",
        "profile",
        "openid",
        "aws.cognito.signin.user.admin",
      ],
    },
  },
};

export const analyticsConfig = {
  AWSPinpoint: {
    appId: REACT_APP_PURPLE_SILENCE_AWS_PINPOINT_PROJECT,
    region: REACT_APP_PURPLE_SILENCE_AWS_PINPOINT_REGION,
    mandatorySignIn: false,
  },
};

const configureAws = (): void => {
  Auth.configure(authConfig);
  Analytics.configure(analyticsConfig);
  Amplify.Logger.LOG_LEVEL = "DEBUG";
};

export default configureAws;
