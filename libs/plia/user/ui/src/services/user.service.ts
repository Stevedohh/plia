import { Accessor, createSignal } from 'solid-js';
import jwt_decode from 'jwt-decode';

import { TOKEN_KEY, User } from '@plia/plia/types';

type UserServiceOutput = {
  setUser: () => void;
  removeUser: () => void;
  getUser: Accessor<User>;
};

export const UserService = (): UserServiceOutput => {
  const [user, setUserSignal] = createSignal<User>(null);

  return {
    setUser: () => {
      const token = localStorage.getItem(TOKEN_KEY);
      if (token) {
        const userFromToken: User = jwt_decode(token);
        setUserSignal(userFromToken);
      }
    },
    removeUser: () => {
      setUserSignal(null);
    },
    getUser: user,
  };
};
