import {APIResponse} from '../../api/common/APIResponse';
import ServiceHelper from './ServiceHelper';

test('should process an api success response correctly', () => {
  const apiResponse: APIResponse<string, string> = {
    ok: true,
    error: null,
    data: 'some success data',
    status: 200,
    headers: {
      Header: 'header',
    },
    axiosRequestConfig: {},
  };

  const serviceResponse = ServiceHelper.processAPIResponse(
    apiResponse,
    responseData => {
      return 'successDataMapper ' + responseData;
    },
    responseData => {
      return 'errorDataMapper ' + responseData;
    },
  );

  expect(serviceResponse.ok).toBe(apiResponse.ok);
  expect(serviceResponse.problem).toBe(null);
  expect(serviceResponse.data).toEqual('successDataMapper some success data');
  expect(serviceResponse.apiResponseStatus).toBe(apiResponse.status);
  expect(serviceResponse.apiResponseHeaders).toEqual(apiResponse.headers);
});

test('should process an api error response correctly', () => {
  const apiResponse: APIResponse<string, string> = {
    ok: false,
    error: new Error('some error'),
    data: 'some error data',
    status: 401,
    headers: {
      Date: 'date',
    },
    axiosRequestConfig: {},
  };

  const serviceResponse = ServiceHelper.processAPIResponse(
    apiResponse,
    responseData => {
      return 'successDataMapper ' + responseData;
    },
    responseData => {
      return 'errorDataMapper ' + responseData;
    },
  );

  expect(serviceResponse.ok).toBe(apiResponse.ok);
  expect(serviceResponse.problem).toBe('API_ERROR');
  expect(serviceResponse.error).toEqual(apiResponse.error);
  expect(serviceResponse.data).toEqual('errorDataMapper some error data');
  expect(serviceResponse.apiResponseStatus).toBe(apiResponse.status);
  expect(serviceResponse.apiResponseHeaders).toEqual(apiResponse.headers);
});

test('should process a generic service error correctly', () => {
  const error = new Error('some error');

  const serviceResponse = ServiceHelper.processGenericServiceError(error);

  expect(serviceResponse.ok).toBeFalsy();
  expect(serviceResponse.problem).toBe('SERVICE_ERROR');
  expect(serviceResponse.error).toEqual(error);
  expect(serviceResponse.data).toBeUndefined();
  expect(serviceResponse.apiResponseStatus).toBeUndefined();
  expect(serviceResponse.apiResponseHeaders).toBeUndefined();
});
