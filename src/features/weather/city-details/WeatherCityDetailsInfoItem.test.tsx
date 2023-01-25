import React from 'react';
import renderer from 'react-test-renderer';
import WeatherCityDetailsInfoItem from './WeatherCityDetailsInfoItem';

test('should render correctly', () => {
  const tree = renderer
    .create(<WeatherCityDetailsInfoItem label={'Cloud Cover'} value={'50%'} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('should render a different state correctly', () => {
  expect(
    <WeatherCityDetailsInfoItem label={'Cloud Cover'} value={'50%'} />,
  ).toMatchDiffSnapshot(
    <WeatherCityDetailsInfoItem label={'Pressure'} value={'1000 hPa'} />,
  );
});
