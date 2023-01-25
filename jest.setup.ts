/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-native/extend-expect';
import 'snapshot-diff';
import 'snapshot-diff/extend-expect';

import {MSWServer} from './__mocks__/MSWServer';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

beforeAll(() => MSWServer.listen());

afterEach(() => MSWServer.resetHandlers());

afterAll(() => MSWServer.close());
