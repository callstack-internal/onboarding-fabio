import {APIResponse} from '../../api/common/APIResponse';
import {ServiceResponse} from './ServiceResponse';

const processAPIResponse = <
  ApiSuccessT,
  ApiErrorT,
  ServiceSuccessT,
  ServiceErrorT,
>(
  apiResponse: APIResponse<ApiSuccessT, ApiErrorT>,
  successDataMapper: (data: ApiSuccessT) => ServiceSuccessT,
  errorDataMapper: (data: ApiErrorT | undefined) => ServiceErrorT,
): ServiceResponse<ServiceSuccessT, ServiceErrorT> => {
  let serviceResponse: ServiceResponse<ServiceSuccessT, ServiceErrorT>;

  if (apiResponse.ok) {
    const newData = successDataMapper(apiResponse.data);

    serviceResponse = {
      ok: apiResponse.ok,
      problem: null,
      data: newData,
      apiResponseStatus: apiResponse.status,
      apiResponseHeaders: apiResponse.headers,
    };
  } else {
    const newData = errorDataMapper(apiResponse.data);

    serviceResponse = {
      ok: apiResponse.ok,
      problem: 'API_ERROR',
      error: apiResponse.error,
      data: newData,
      apiResponseStatus: apiResponse.status,
      apiResponseHeaders: apiResponse.headers,
    };
  }

  return serviceResponse;
};

const processGenericServiceError = <T, U>(
  error: unknown,
): ServiceResponse<T, U> => {
  console.error(error);

  return {
    ok: false,
    problem: 'SERVICE_ERROR',
    error: error instanceof Error ? error : new Error(String(error)),
  };
};

const ServiceHelper = {
  processAPIResponse,
  processGenericServiceError,
};

export default ServiceHelper;
