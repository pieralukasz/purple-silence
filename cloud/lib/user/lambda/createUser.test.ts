import {
  adminGetUserMock,
  MOCKED_USER_EMAIL,
  MOCKED_USER_PHONE,
} from "../mocks";

import createUser from "./createUser";

const getUserSpy = jest.fn();
const createUserSpy = jest.fn();
const getListGroups = jest.fn();

jest.mock("aws-sdk", () => {
  return {
    CognitoIdentityServiceProvider: jest.fn().mockImplementation(() => {
      return {
        adminGetUser: () => ({
          promise: getUserSpy.mockReturnValue(adminGetUserMock),
        }),
        adminCreateUser: () => ({
          promise: createUserSpy.mockReturnValue({ User: adminGetUserMock }),
        }),
        adminListGroupsForUser: () => ({
          promise: getListGroups.mockImplementation(() => Promise.resolve()),
        }),
      };
    }),
  };
});

describe("createUser", () => {
  it("should return created user", async () => {
    const user = await createUser({
      email: MOCKED_USER_EMAIL,
      phoneNumber: MOCKED_USER_PHONE,
    });

    expect(getUserSpy).toHaveBeenCalled();
    expect(getListGroups).toHaveBeenCalled();
    expect(createUserSpy).toHaveBeenCalled();
    expect(user).toEqual({
      id: "c0dc679b-c4fa-434c-ba47-f65101075680",
      updatedAt: "2021-07-22T13:30:25.699Z",
      email: MOCKED_USER_EMAIL,
      phoneNumber: MOCKED_USER_PHONE,
      groupName: "",
      enabled: true,
      verified: true,
    });
  });
});
