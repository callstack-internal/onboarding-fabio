// eslint-disable-next-line import/no-extraneous-dependencies
import {setupServer} from 'msw/node';
import {MSWHandlers} from './MSWHandlers';

export const MSWServer = setupServer(...MSWHandlers);
