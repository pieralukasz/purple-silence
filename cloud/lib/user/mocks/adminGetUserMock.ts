export const MOCKED_USER_ID = "c0dc679b-c4fa-434c-ba47-f65101075680";
export const MOCKED_USER_EMAIL = "test@email.com";
export const MOCKED_USER_PHONE = "+48555333222";

export const adminGetUserMock = {
  Username: "c0dc679b-c4fa-434c-ba47-f65101075680",
  UserAttributes: [
    {
      Name: "sub",
      Value: MOCKED_USER_ID,
    },
    {
      Name: "email_verified",
      Value: "false",
    },
    {
      Name: "phone_number_verified",
      Value: "false",
    },
    {
      Name: "phone_number",
      Value: MOCKED_USER_PHONE,
    },
    {
      Name: "locale",
      Value: "pl",
    },
    {
      Name: "email",
      Value: MOCKED_USER_EMAIL,
    },
  ],
  UserCreateDate: "2021-07-21T18:04:08.145Z",
  UserLastModifiedDate: "2021-07-22T13:30:25.699Z",
  Enabled: true,
  UserStatus: "CONFIRMED",
};
