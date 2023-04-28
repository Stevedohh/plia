import { TOKEN_KEY } from '@plia/plia/types';

export const getBearerToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};
