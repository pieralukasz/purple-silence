import * as EmailValidator from "email-validator";

export const isPhoneNumber = (phoneNumber: string): boolean =>
  new RegExp("^[+].[0-9]{5,14}$").test(phoneNumber);

export const isEmail = (email: string): boolean =>
  EmailValidator.validate(email);
