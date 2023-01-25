import {fireEvent, render, within} from '@testing-library/react-native';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import React from 'react';
import successJSON from '../__tests__/open-weather-api/open-weather-api-success-response.json';
import App from './App';
import OpenWeatherAPI from './data/api/open-weather/OpenWeatherAPI';

describe('App', () => {
  const server = setupServer(
    rest.get(
      `${OpenWeatherAPI.BASE_URL}${OpenWeatherAPI.endpoints.group}`,
      (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(successJSON));
      },
    ),
  );

  beforeAll(() => server.listen());

  afterAll(() => server.close());

  test('should list 2 cities in the screen and navigate to its details when the first one is tapped', async () => {
    const app = render(<App />);

    const listScreen = within(app.getByTestId('weather-city-list-screen'));

    const parisElement = await listScreen.findByText('Paris');
    const madridElement = await listScreen.findByText('Madrid');

    expect(parisElement).toBeOnTheScreen();
    expect(madridElement).toBeOnTheScreen();

    fireEvent.press(parisElement);

    const detailsScreen = within(
      await app.findByTestId('weather-city-details-screen'),
    );

    expect(detailsScreen.getByText('Paris')).toBeOnTheScreen();
  });
});
