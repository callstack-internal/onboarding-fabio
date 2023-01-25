import {fireEvent, render, within} from '@testing-library/react-native';
import React from 'react';
import App from './App';

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
