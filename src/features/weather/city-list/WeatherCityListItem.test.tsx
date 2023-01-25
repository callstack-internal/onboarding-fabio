import React from 'react';
import renderer from 'react-test-renderer';
import WeatherCityListItem from './WeatherCityListItem';

test('should render correctly', () => {
  const tree = renderer
    .create(
      <WeatherCityListItem
        item={{
          id: 2988507,
          name: 'Paris',
          weather: 'Mist',
          temperature: 32.47,
          pressure: 1031,
          humidity: 95,
          windSpeed: 5.75,
          cloudCover: 100,
          iconURL: 'https://openweathermap.org/img/wn/50d.png',
        }}
        onPress={() => {}}
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('should render a different state correctly', () => {
  expect(
    <WeatherCityListItem
      item={{
        id: 2988507,
        name: 'Paris',
        weather: 'Mist',
        temperature: 32.47,
        pressure: 1031,
        humidity: 95,
        windSpeed: 5.75,
        cloudCover: 100,
        iconURL: 'https://openweathermap.org/img/wn/50d.png',
      }}
    />,
  ).toMatchDiffSnapshot(
    <WeatherCityListItem
      item={{
        id: 3117735,
        name: 'Madrid',
        weather: 'Clear',
        temperature: 47.44,
        pressure: 1025,
        humidity: 46,
        windSpeed: 6.91,
        cloudCover: 0,
        iconURL: 'https://openweathermap.org/img/wn/01d.png',
      }}
      onPress={() => {}}
    />,
  );
});
