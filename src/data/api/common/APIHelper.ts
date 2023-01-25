import axios, {AxiosResponse} from 'axios';
import {APIResponse} from './APIResponse';

const processAxiosResponse = <T, U>(
  axiosResponse: AxiosResponse,
): APIResponse<T, U> => {
  const apiResponse: APIResponse<T, U> = {
    ok: true,
    error: null,
    data: axiosResponse.data,
    status: axiosResponse.status,
    headers: axiosResponse.headers,
    axiosRequestConfig: axiosResponse.config,
  };

  return apiResponse;
};

const processAPIError = <T, U>(error: unknown): APIResponse<T, U> => {
  if (axios.isAxiosError(error)) {
    const apiResponse: APIResponse<T, U> = {
      ok: false,
      error: error,
      data: error.response?.data,
      status: error.response?.status,
      headers: error.response?.headers,
      axiosRequestConfig: error.config,
    };

    return apiResponse;
  } else {
    const apiResponse: APIResponse<T, U> = {
      ok: false,
      error: error instanceof Error ? error : new Error(String(error)),
    };

    return apiResponse;
  }
};

const APIHelper = {
  processAxiosResponse,
  processAPIError,
};

export default APIHelper;
