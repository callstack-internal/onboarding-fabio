import {CITIES_LIST} from '../../../utils/Constants';
import OpenWeatherAPI from '../../api/open-weather/OpenWeatherAPI';
import {CityModel, CityModelMapper} from '../../model/city/CityModel';
import {
  OpenWeatherGenericErrorResponseMapper,
  OpenWeatherGenericErrorResponseModel,
} from '../../model/open-weather/OpenWeatherGenericErrorResponseModel';
import ServiceHelper from '../common/ServiceHelper';
import {ServiceResponse} from '../common/ServiceResponse';

const fetchCitiesWeather = async (): Promise<
  ServiceResponse<CityModel[], OpenWeatherGenericErrorResponseModel>
> => {
  try {
    const apiResponse = await OpenWeatherAPI.fetchCitiesWeather({
      citiesIDs: CITIES_LIST,
    });

    return ServiceHelper.processAPIResponse(
      apiResponse,
      responseData => {
        return responseData.list.map(CityModelMapper.dtoToModel);
      },
      responseData => {
        return OpenWeatherGenericErrorResponseMapper.dtoToModel(responseData!);
      },
    );
  } catch (e) {
    return ServiceHelper.processGenericServiceError(e);
  }
};

const WeatherService = {
  fetchCitiesWeather,
};

export default WeatherService;
