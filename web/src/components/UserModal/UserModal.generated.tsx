import * as Types from "../../types/generated/types";

import { gql } from "@apollo/client";
export type NewUserFragment = {
  __typename?: "User";
  id: string;
  email: string;
  enabled: boolean;
  phoneNumber: string;
  updatedAt: string;
  verified: boolean;
};

export const NewUserFragmentDoc = gql`
  fragment NewUser on User {
    id
    email
    enabled
    phoneNumber
    updatedAt
    verified
  }
`;
