import { AxiosRequestConfig } from 'axios';
import * as R from 'ramda';

import { getBearerToken } from './http.utils';

export const tokenInterceptor = (config: AxiosRequestConfig) => {
  const token = getBearerToken();

  if (!config?.headers?.Authorization && token) {
    return R.mergeAll([
      config,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    ]);
  }

  return config;
};
