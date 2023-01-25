import {useEffect, useState} from 'react';
import {CityModel} from '../../data/model/city/CityModel';
import WeatherService from '../../data/service/weather/WeatherService';

const useFetchCitiesWeather = (): {
  data: CityModel[];
  isLoading: boolean;
  error: Error | null;
  fetch: () => Promise<void>;
} => {
  const [data, setData] = useState<CityModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetch = async () => {
    setIsLoading(true);
    setError(null);

    const fetchCitiesWeatherResponse =
      await WeatherService.fetchCitiesWeather();

    if (!fetchCitiesWeatherResponse.ok) {
      setIsLoading(false);
      setError(fetchCitiesWeatherResponse.error);

      return;
    }

    setData(fetchCitiesWeatherResponse.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    data,
    isLoading,
    error,
    fetch,
  };
};

export default useFetchCitiesWeather;
