import {render, screen} from '@testing-library/react-native';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import React from 'react';
import errorJSON from '../../../../__tests__/open-weather-api/open-weather-api-error-response.json';
import successEmptyJSON from '../../../../__tests__/open-weather-api/open-weather-api-success-empty-response.json';
import successJSON from '../../../../__tests__/open-weather-api/open-weather-api-success-response.json';
import OpenWeatherAPI from '../../../data/api/open-weather/OpenWeatherAPI';
import WeatherCityListScreen from './WeatherCityListScreen';

describe('WeatherCityListScreen - API success cases', () => {
  const server = setupServer();

  beforeAll(() => server.listen());

  afterAll(() => server.close());

  test('should list 2 cities in the screen', async () => {
    server.resetHandlers(
      rest.get(
        `${OpenWeatherAPI.BASE_URL}${OpenWeatherAPI.endpoints.group}`,
        (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(successJSON));
        },
      ),
    );

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

  test('should show a message in the screen in case of empty data', async () => {
    server.resetHandlers(
      rest.get(
        `${OpenWeatherAPI.BASE_URL}${OpenWeatherAPI.endpoints.group}`,
        (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(successEmptyJSON));
        },
      ),
    );

    const navigation: any = {navigate: jest.fn()};
    const route: any = {};

    render(<WeatherCityListScreen navigation={navigation} route={route} />);

    expect(await screen.findByText('No data to display.')).toBeOnTheScreen();
    expect(await screen.findByText('Try Again')).toBeOnTheScreen();
  });
});

describe('WeatherCityListScreen - API error cases', () => {
  const server = setupServer(
    rest.get(
      `${OpenWeatherAPI.BASE_URL}${OpenWeatherAPI.endpoints.group}`,
      (req, res, ctx) => {
        return res(ctx.status(401), ctx.json(errorJSON));
      },
    ),
  );

  beforeAll(() => server.listen());

  afterAll(() => server.close());

  test('should show a message in the screen in case of API error', async () => {
    const navigation: any = {navigate: jest.fn()};
    const route: any = {};

    render(<WeatherCityListScreen navigation={navigation} route={route} />);

    expect(await screen.findByText('An error occurred.')).toBeOnTheScreen();
    expect(await screen.findByText('Try Again')).toBeOnTheScreen();
  });
});
