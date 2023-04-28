import { CreateMutationResult } from '@tanstack/solid-query';

import { CommonError } from './api';

export const TOKEN_KEY = 'token';

export type JWTResponse = CreateMutationResult<
  {
    token: string;
  },
  CommonError
>;

export type RegisterPayload = {
  email: string;
  full_name: string;
  password: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};
