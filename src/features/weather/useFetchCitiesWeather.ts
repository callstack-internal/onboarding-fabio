import {useEffect, useState} from 'react';
import {CityModel} from '../../data/model/city/CityModel';
import WeatherService from '../../data/service/weather/WeatherService';

const useFetchCitiesWeather = (): {
  data: CityModel[];
} => {
  const [data, setData] = useState<CityModel[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const fetchCitiesWeatherResponse =
        await WeatherService.fetchCitiesWeather();

      if (!fetchCitiesWeatherResponse.ok) {
        // TODO: Handle service error.
        return;
      }

      setData(fetchCitiesWeatherResponse.data);
    };

    fetch();
  }, []);

  return {
    data,
  };
};

export default useFetchCitiesWeather;
