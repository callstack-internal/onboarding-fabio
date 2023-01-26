import {AxiosError, AxiosResponse} from 'axios';
import APIHelper from './APIHelper';

test('should process an axios success response correctly', () => {
  const axiosResponse: AxiosResponse = {
    data: 'some success data',
    status: 200,
    headers: {
      Header: 'header',
    },
    statusText: '200',
    config: {
      headers: {} as any,
    },
  };

  const apiResponse = APIHelper.processAxiosResponse(axiosResponse);

  expect(apiResponse.ok).toBeTruthy();
  expect(apiResponse.error).toBe(null);
  expect(apiResponse.data).toEqual(axiosResponse.data);
  expect(apiResponse.status).toBe(axiosResponse.status);
  expect(apiResponse.headers).toEqual(axiosResponse.headers);
  expect(apiResponse.axiosRequestConfig).toEqual(axiosResponse.config);
});

test('should process an axios error correctly', () => {
  const error = new AxiosError();
  error.response = {
    data: 'some error data',
    status: 401,
    headers: {
      Header: 'header',
    },
    statusText: '401',
    config: {
      headers: {} as any,
    },
  };
  error.config = {
    headers: {} as any,
  };

  const apiResponse = APIHelper.processAPIError(error);

  expect(apiResponse.ok).toBeFalsy();
  expect(apiResponse.error).toEqual(error);
  expect(apiResponse.data).toEqual(error.response.data);
  expect(apiResponse.status).toBe(error.response.status);
  expect(apiResponse.headers).toEqual(error.response.headers);
  expect(apiResponse.axiosRequestConfig).toEqual(error.response.config);
});

test('should process a generic error correctly', () => {
  const error = new Error('some generic error');

  const apiResponse = APIHelper.processAPIError(error);

  expect(apiResponse.ok).toBeFalsy();
  expect(apiResponse.error).toEqual(error);
  expect(apiResponse.data).toBeUndefined();
  expect(apiResponse.status).toBeUndefined();
  expect(apiResponse.headers).toBeUndefined();
  expect(apiResponse.axiosRequestConfig).toBeUndefined();
});
