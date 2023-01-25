import {render, screen} from '@testing-library/react-native';
import React from 'react';
import WeatherCityListScreen from './WeatherCityListScreen';

test('should list 2 cities in the screen', async () => {
  const navigation: any = {navigate: jest.fn()};
  const route: any = {};

  render(<WeatherCityListScreen navigation={navigation} route={route} />);

  expect(await screen.findByText('Paris')).toBeOnTheScreen();
  expect(await screen.findByText('32.11 °F')).toBeOnTheScreen();
  expect(await screen.findByText('Mist')).toBeOnTheScreen();

  expect(await screen.findByText('Madrid')).toBeOnTheScreen();
  expect(await screen.findByText('49.28 °F')).toBeOnTheScreen();
  expect(await screen.findByText('Clear')).toBeOnTheScreen();
});
