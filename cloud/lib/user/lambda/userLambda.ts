import {
  GetUsersArgs,
  UpdateUserInput,
  StatusInput,
  CreateUserInput,
  GetUsersResponse,
  User,
} from "../interfaces";

import getUsers from "./getUsers";
import setUserStatus from "./setUserStatus";
import updateUser from "./updateUser";
import createUser from "./createUser";

type AppSyncEvent = {
  info: {
    fieldName: "getUsers" | "updateUser" | "createUser" | "setUserStatus";
  };
  arguments: {
    getUsersArgs: GetUsersArgs;
    updateUserInput: UpdateUserInput;
    createUserInput: CreateUserInput;
    statusInput: StatusInput;
  };
};

const handler = async (
  event: AppSyncEvent
): Promise<GetUsersResponse | User | null | void> => {
  const { getUsersArgs, updateUserInput, createUserInput, statusInput } =
    event.arguments;

  switch (event.info.fieldName) {
    case "getUsers":
      return await getUsers(getUsersArgs);
    case "updateUser":
      return await updateUser(updateUserInput);
    case "createUser":
      return await createUser(createUserInput);
    case "setUserStatus":
      return await setUserStatus(statusInput);
    default:
      return null;
  }
};

exports.handler = handler;
