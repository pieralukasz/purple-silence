import { CognitoUser } from "amazon-cognito-identity-js";

export type UserChallenge =
  | "CUSTOM_CHALLENGE"
  | "NEW_PASSWORD_REQUIRED"
  | "SMS_MFA"
  | "SOFTWARE_TOKEN_MFA"
  | "MFA_SETUP"
  | undefined;

interface SignInResult extends CognitoUser {
  challengeName: UserChallenge;
}

export default SignInResult;
