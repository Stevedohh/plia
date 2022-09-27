import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const pliaApi = {
  api: axios.create({
    baseURL: 'http://localhost:3333/api/',
  }),

  getUri(config: AxiosRequestConfig): string {
    return this.api.getUri(config);
  },

  request<ResponseDataType, ReturnType = AxiosResponse<ResponseDataType>>(
    config: AxiosRequestConfig,
  ): Promise<ReturnType> {
    return this.api.request(config);
  },

  get<ResponseDataType, ReturnType = AxiosResponse<ResponseDataType>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ReturnType> {
    return this.api.get(url, config);
  },

  delete<ResponseDataType, ReturnType = AxiosResponse<ResponseDataType>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ReturnType> {
    return this.api.delete(url, config);
  },

  head<ResponseDataType, ReturnType = AxiosResponse<ResponseDataType>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ReturnType> {
    return this.api.head(url, config);
  },

  post<ResponseDataType, RequestDataType, ReturnType = AxiosResponse<ResponseDataType>>(
    url: string,
    data?: RequestDataType,
    config?: AxiosRequestConfig,
  ): Promise<ReturnType> {
    return this.api.post(url, data, config);
  },

  put<ResponseDataType, RequestDataType, ReturnType = AxiosResponse<ResponseDataType>>(
    url: string,
    data?: RequestDataType,
    config?: AxiosRequestConfig,
  ): Promise<ReturnType> {
    return this.api.put(url, data, config);
  },

  patch<ResponseDataType, RequestDataType, ReturnType = AxiosResponse<ResponseDataType>>(
    url: string,
    data?: RequestDataType,
    config?: AxiosRequestConfig,
  ): Promise<ReturnType> {
    return this.api.patch(url, data, config);
  },

  success<ResponseDataType>(response: AxiosResponse<ResponseDataType>): ResponseDataType {
    return response.data;
  },

  error(error: AxiosError<Error>) {
    throw error;
  },
};
