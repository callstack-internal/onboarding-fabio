// eslint-disable-next-line import/no-extraneous-dependencies
import {rest} from 'msw';

export const MSWHandlers = [
  rest.get('https://api.openweathermap.org/data/2.5/group', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        cnt: 2,
        list: [
          {
            coord: {
              lon: 2.3488,
              lat: 48.8534,
            },
            sys: {
              country: 'FR',
              timezone: 3600,
              sunrise: 1674631797,
              sunset: 1674664525,
            },
            weather: [
              {
                id: 701,
                main: 'Mist',
                description: 'mist',
                icon: '50n',
              },
            ],
            main: {
              temp: 32.11,
              feels_like: 24.94,
              temp_min: 30.25,
              temp_max: 33.08,
              pressure: 1030,
              humidity: 92,
            },
            visibility: 3000,
            wind: {
              speed: 8.05,
              deg: 320,
            },
            clouds: {
              all: 100,
            },
            dt: 1674666555,
            id: 2988507,
            name: 'Paris',
          },
          {
            coord: {
              lon: -3.7026,
              lat: 40.4165,
            },
            sys: {
              country: 'ES',
              timezone: 3600,
              sunrise: 1674631825,
              sunset: 1674667402,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            main: {
              temp: 49.28,
              feels_like: 47.62,
              temp_min: 44.01,
              temp_max: 51.22,
              pressure: 1024,
              humidity: 39,
            },
            visibility: 10000,
            wind: {
              speed: 4.61,
              deg: 250,
            },
            clouds: {
              all: 0,
            },
            dt: 1674666553,
            id: 3117735,
            name: 'Madrid',
          },
        ],
      }),
    );
  }),
];
