declare module "*.svg" {
  import { SvgProps } from "react-native-svg";

  const content: React.FC<SvgProps>;
  export default content;
}

declare module "*.png";

declare module "@env" {
  export const REACT_APP_PURPLE_SILENCE_AWS_PINPOINT_PROJECT: string;
  export const REACT_APP_PURPLE_SILENCE_AWS_APPSYNC_REGION: string;
  export const REACT_APP_PURPLE_SILENCE_ENVIRONMENT: string;
  export const REACT_APP_PURPLE_SILENCE_AWS_PINPOINT_REGION: string;
  export const REACT_APP_PURPLE_SILENCE_AWS_COGNITO_USER_POOL_CLIENT_ID: string;
  export const REACT_APP_PURPLE_SILENCE_AWS_COGNITO_REGION: string;
  export const REACT_APP_PURPLE_SILENCE_AWS_COGNITO_USER_POOL_ID: string;
  export const REACT_APP_PURPLE_SILENCE_AWS_COGNITO_USER_POOL_DOMAIN: string;
  export const REACT_APP_PURPLE_SILENCE_AWS_COGNITO_IDENTITY_POOL: string;
  export const REACT_APP_PURPLE_SILENCE_AWS_APPSYNC_URL: string;
  export const REACT_APP_PURPLE_SILENCE_LOCIZE_API_KEY: string;
  export const REACT_APP_PURPLE_SILENCE_LOCIZE_PROJECT_ID: string;
}
