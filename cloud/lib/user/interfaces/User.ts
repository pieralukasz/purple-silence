interface UserAttributes {
  email: string;
  phoneNumber: string;
}

export interface User extends UserAttributes {
  id: string;
  enabled: boolean;
  verified: boolean;
  updatedAt: string | Date;
  groupName?: string;
}

export interface CreateUserInput extends UserAttributes {
  verified?: boolean;
}

export interface UpdateUserInput extends Partial<UserAttributes> {
  id: string;
}

export type StatusInput = Pick<User, "id" | "enabled">;
