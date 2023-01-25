export interface CityDTO {
  weather: {
    main: string;
    icon: string;
  }[];
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
  name: string;
  id: string;
}

export interface CityModel {
  id: string;
  name: string;
  weather: string | undefined;
  temperature: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
  cloudCover: number;
  iconURL: string | undefined;
}

export const CityModelMapper = {
  dtoToModel: (dto: CityDTO): CityModel => {
    const weatherDTO = dto.weather[0] ? dto.weather[0] : undefined;

    return {
      id: dto.id,
      name: dto.name,
      weather: weatherDTO?.main,
      temperature: dto.main.temp,
      pressure: dto.main.pressure,
      humidity: dto.main.humidity,
      windSpeed: dto.wind.speed,
      cloudCover: dto.clouds.all,
      iconURL: weatherDTO
        ? `https://openweathermap.org/img/wn/${weatherDTO.icon}.png`
        : undefined,
    };
  },
};
