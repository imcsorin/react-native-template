/* eslint-disable no-undef */
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

require('jest-fetch-mock').enableFetchMocks();

jest.mock('i18n-js', () => ({
  I18n: jest.fn(),
}));

jest.mock('react-native-localize', () => ({
  getLocales: () => [
    {countryCode: 'GB', languageTag: 'en-GB', languageCode: 'en', isRTL: false},
    {countryCode: 'US', languageTag: 'en-US', languageCode: 'en', isRTL: false},
    {countryCode: 'FR', languageTag: 'fr-FR', languageCode: 'fr', isRTL: false},
  ],

  getNumberFormatSettings: () => ({
    decimalSeparator: '.',
    groupingSeparator: ',',
  }),

  getCalendar: () => 'gregorian', // or "japanese", "buddhist"
  getCountry: () => 'US', // the country code you want
  getCurrencies: () => ['USD', 'EUR'], // can be empty array
  getTemperatureUnit: () => 'celsius', // or "fahrenheit"
  getTimeZone: () => 'Europe/Paris', // the timezone you want
  uses24HourClock: () => true,
  usesMetricSystem: () => true,

  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

jest.mock('@sentry/react-native', () => ({
  init: () => jest.fn(),
  ReactNavigationInstrumentation: () => jest.fn(),
  wrap: component => component,
}));

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});
