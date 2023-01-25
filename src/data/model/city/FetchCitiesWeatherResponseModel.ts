import {CityDTO} from './CityModel';

export interface FetchCitiesWeatherResponseDTO {
  cnt: number;
  list: CityDTO[];
}
