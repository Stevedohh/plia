import { LoginPayload, RegisterPayload, UpdateUserPayload } from '@plia/plia/types';

import { http } from '../http';

export const AuthService = () => ({
  async register(user: RegisterPayload) {
    return http.post('/auth/register', user);
  },

  async login(user: LoginPayload) {
    return http.post('/auth/login', user);
  },

  async update(user: UpdateUserPayload) {
    return http.post('/auth/update', user);
  },
});
