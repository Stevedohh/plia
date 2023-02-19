import { createMutation as useSolidMutation, CreateMutationOptions } from '@tanstack/solid-query';
import { HttpContextProvider, HttpContextProviderProps } from '../services';

type CallbackReturn = (...args: any) => any;

const useCommonMutation = <T, Res = unknown, Req = unknown, Err = Record<string, unknown>>(
  context: T,
  callback: (context: T) => CallbackReturn,
  options?: CreateMutationOptions,
) => {
  const name = `${callback.toString().replace(/\n/g, ' ').toLowerCase()}`;

  return useSolidMutation<Res, Err, Req>(
    [name],
    (params) => callback(context)(params),
    options as any,
  );
};

export const useMutation = <Res = unknown, Req = unknown, Err = Record<string, unknown>>(
  callback: (context: HttpContextProviderProps) => CallbackReturn,
  options?: CreateMutationOptions,
) => {
  return useCommonMutation<HttpContextProviderProps, Res, Req, Err>(
    HttpContextProvider,
    callback,
    options,
  );
};
