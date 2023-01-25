import {
  AxiosError,
  AxiosRequestConfig,
  RawAxiosResponseHeaders,
  AxiosResponseHeaders,
} from 'axios';

interface APIErrorResponse<T> {
  ok: false;
  error: AxiosError | Error;
  data?: T;
  status?: number;
  headers?: RawAxiosResponseHeaders | AxiosResponseHeaders;
  axiosRequestConfig?: AxiosRequestConfig;
}

interface APISuccessResponse<T> {
  ok: true;
  error: null;
  data: T;
  status: number;
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  axiosRequestConfig: AxiosRequestConfig;
}

export type APIResponse<T, U = T> = APIErrorResponse<U> | APISuccessResponse<T>;
