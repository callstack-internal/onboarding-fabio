import React from 'react';
import WeatherCityDetailsInfoItem from './WeatherCityDetailsInfoItem';

test('should render a different state correctly', () => {
  expect(
    <WeatherCityDetailsInfoItem label={'Cloud Cover'} value={'50%'} />,
  ).toMatchDiffSnapshot(
    <WeatherCityDetailsInfoItem label={'Pressure'} value={'1000 hPa'} />,
  );
});
