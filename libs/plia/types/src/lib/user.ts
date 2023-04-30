export enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type Role = {
  id: number;
  value: Roles;
};

export type User = {
  id: string;
  full_name: string;
  email: string;
  role: Role;
};

export type UpdateUserPayload = {
  full_name: string;
  email: string;
  password: string;
};
