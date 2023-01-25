import {RawAxiosResponseHeaders, AxiosResponseHeaders} from 'axios';

interface ServiceErrorResponse<T> {
  ok: false;
  problem: ServiceProblem;
  error: Error;
  data?: T;
  apiResponseStatus?: number;
  apiResponseHeaders?: RawAxiosResponseHeaders | AxiosResponseHeaders;
}

interface ServiceSuccessResponse<T> {
  ok: true;
  problem: null;
  data: T;
  apiResponseStatus?: number;
  apiResponseHeaders?: RawAxiosResponseHeaders | AxiosResponseHeaders;
}

export type ServiceProblem = 'API_ERROR' | 'SERVICE_ERROR';

export type ServiceResponse<T, U = T> =
  | ServiceErrorResponse<U>
  | ServiceSuccessResponse<T>;
