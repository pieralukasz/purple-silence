import {
  AdminCreateUserRequest,
  AttributeListType,
} from "aws-sdk/clients/cognitoidentityserviceprovider";

import { CreateUserInput, User } from "../interfaces";
import { cognitoIdentityServiceProvider } from "../config";

import { ErrorUser } from "../error";
import { ErrorKey } from "../enums";

import { getUserById, isEmail, isPhoneNumber } from "../utils";

import { USER_POOL_ID } from "../constants";

const createUser = async (input: CreateUserInput): Promise<User | null> => {
  const { email, phoneNumber, verified = false } = input;

  try {
    if (phoneNumber && !isPhoneNumber(phoneNumber ?? ""))
      throw new Error(ErrorKey.WrongPhoneNumber);

    if (email && !isEmail(email ?? ""))
      throw new Error(ErrorKey.WrongEmailAddress);

    const attributes: AttributeListType = [
      { Name: "email", Value: email },
      { Name: "phone_number", Value: phoneNumber },
      { Name: "email_verified", Value: verified.toString() },
      { Name: "phone_number_verified", Value: verified.toString() },
    ];

    const params: AdminCreateUserRequest = {
      UserPoolId: USER_POOL_ID,
      Username: email,
      DesiredDeliveryMediums: ["EMAIL"],
      UserAttributes: attributes,
    };

    const payload = await cognitoIdentityServiceProvider
      .adminCreateUser(params)
      .promise();

    const user = await getUserById(email);

    return user ? { ...user, id: payload.User!.Username! } : user;
  } catch (e) {
    throw new ErrorUser(e);
  }
};

export default createUser;
