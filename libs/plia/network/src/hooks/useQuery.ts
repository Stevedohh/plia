import { createQuery as useSolidQuery, CreateQueryOptions } from '@tanstack/solid-query';
import { HttpContextProvider, HttpContextProviderProps } from '../services';

type CallbackReturn = (...args: any) => any;

const useCommonQuery = <T, Res = unknown, Req = unknown, Err = Record<string, unknown>>(
  context: T,
  callback: (context: T) => CallbackReturn,
  params?: Req,
  { enabled = true, ...options }: CreateQueryOptions = {},
) => {
  const name = `${callback.toString().replace(/\n/g, ' ').toLowerCase()}`;

  return useSolidQuery<Res, Err>(
    () => [name],
    () => callback(context)(params),
    {
      refetchOnWindowFocus: false,
      retry: false,
      keepPreviousData: true,
      enabled,
      ...options,
    } as any,
  );
};

export const useQuery = <Res = unknown, Req = unknown, Err = Record<string, unknown>>(
  callback: (context: HttpContextProviderProps) => CallbackReturn,
  params?: Req,
  options?: CreateQueryOptions,
) => {
  return useCommonQuery<HttpContextProviderProps, Res, Req, Err>(
    HttpContextProvider,
    callback,
    params,
    options,
  );
};
