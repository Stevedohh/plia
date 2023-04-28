import { TOKEN_KEY } from '@plia/plia/types';
import { useService } from 'solid-services';
import { useNavigate } from '@solidjs/router';

import { UserService } from '@plia/plia/user/ui';

export type AuthServiceOutput = {
  __setSession: (token: string) => void;
  login: (token: string) => void;
  logout: () => void;
};

export const AuthService = (): AuthServiceOutput => {
  const navigate = useNavigate();
  const userService = useService(UserService)();

  return {
    __setSession(token: string) {
      localStorage.setItem(TOKEN_KEY, token);
    },
    login(token: string) {
      this.__setSession(token);
      userService.setUser();
      navigate('/sites');
    },
    logout() {
      localStorage.removeItem(TOKEN_KEY);
      userService.removeUser();
      navigate('/');
    },
  };
};
