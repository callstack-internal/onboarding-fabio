import axios from 'axios';
import {OPEN_WEATHER_API_KEY} from '../../../utils/Constants';
import {FetchCitiesWeatherResponseDTO} from '../../model/city/FetchCitiesWeatherResponseModel';
import {OpenWeatherGenericErrorResponseDTO} from '../../model/open-weather/OpenWeatherGenericErrorResponseModel';
import APIHelper from '../common/APIHelper';
import {APIResponse} from '../common/APIResponse';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const endpoints = {
  group: '/group',
};

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

const fetchCitiesWeather = async ({
  citiesIDs,
}: {
  citiesIDs: number[];
}): Promise<
  APIResponse<FetchCitiesWeatherResponseDTO, OpenWeatherGenericErrorResponseDTO>
> => {
  try {
    const axiosResponse = await client.get(endpoints.group, {
      params: {
        id: citiesIDs.join(','),
        units: 'imperial',
        appid: OPEN_WEATHER_API_KEY,
      },
    });

    return APIHelper.processAxiosResponse(axiosResponse);
  } catch (e) {
    return APIHelper.processAPIError(e);
  }
};

const OpenWeatherAPI = {
  BASE_URL,
  endpoints,
  fetchCitiesWeather,
};

export default OpenWeatherAPI;
