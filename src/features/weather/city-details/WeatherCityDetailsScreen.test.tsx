import {RouteProp} from '@react-navigation/native';
import {render, screen} from '@testing-library/react-native';
import React from 'react';
import {RootStackParamList} from '../../../navigation/types/RootStackNavigationTypes';
import WeatherCityDetailsScreen from './WeatherCityDetailsScreen';

test('should show all the city details', () => {
  const navigation: any = {};
  const route: RouteProp<RootStackParamList, 'WeatherCityDetails'> = {
    key: '',
    name: 'WeatherCityDetails',
    params: {
      city: {
        id: 2988507,
        name: 'Paris',
        weather: 'Mist',
        temperature: 32.47,
        pressure: 1031,
        humidity: 95,
        windSpeed: 5.75,
        cloudCover: 100,
        iconURL: 'https://openweathermap.org/img/wn/50d.png',
      },
    },
  };

  render(<WeatherCityDetailsScreen navigation={navigation} route={route} />);

  expect(screen.getByText('Paris')).toBeOnTheScreen();
  expect(screen.getByText('Mist')).toBeOnTheScreen();
  expect(screen.getByText('32.47 °F')).toBeOnTheScreen();

  expect(screen.getByText('Humidity')).toBeOnTheScreen();
  expect(screen.getByText('95%')).toBeOnTheScreen();

  expect(screen.getByText('Pressure')).toBeOnTheScreen();
  expect(screen.getByText('1031 hPa')).toBeOnTheScreen();

  expect(screen.getByText('Wind Speed')).toBeOnTheScreen();
  expect(screen.getByText('5.75 mph')).toBeOnTheScreen();

  expect(screen.getByText('Cloud Cover')).toBeOnTheScreen();
  expect(screen.getByText('100%')).toBeOnTheScreen();
});
