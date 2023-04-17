import { createMutation as useSolidMutation, CreateMutationOptions } from '@tanstack/solid-query';

import { CommonError } from '@plia/plia/types';

import { HttpContextProvider, HttpContextProviderProps } from '../services';

type CallbackReturn = (...args: any) => any;

const useCommonMutation = <T, Res = unknown, Req = unknown, Error = CommonError>(
  context: T,
  callback: (context: T) => CallbackReturn,
  options?: CreateMutationOptions<Res, Error, Req>,
) => {
  const name = `${callback.toString().replace(/\n/g, ' ').toLowerCase()}`;

  return useSolidMutation<Res, Error, Req>([name], (params) => callback(context)(params), options);
};

export const useMutation = <Res = unknown, Req = unknown, Error = CommonError>(
  callback: (context: HttpContextProviderProps) => CallbackReturn,
  options?: CreateMutationOptions<Res, Error, Req>,
) => {
  return useCommonMutation<HttpContextProviderProps, Res, Req, Error>(
    HttpContextProvider,
    callback,
    options,
  );
};
