import React from 'react';
import {useColorScheme} from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import {NavigationContainer} from '@react-navigation/native';
import NavigationScreens from './src/screens';
import * as Sentry from '@sentry/react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {ENVIRONMENT} from './env';
import {useTranslationFinder} from './translations';
import {persistor} from './src/redux';

if (ENVIRONMENT.SENTRY_DSN) {
  // TODO: Don't forget to complete the installation: https://docs.sentry.io/platforms/react-native/#run-the-sentry-wizard
  Sentry.init({
    dsn: ENVIRONMENT.SENTRY_DSN,
  });
}

const TailwindProv = TailwindProvider as any;
const App = () => {
  useTranslationFinder();

  const colorScheme = useColorScheme();

  return (
    // there needs to be an update to tailwind-rn because this component
    // does accept the children prop but they forgot to add it to the interface
    <PersistGate loading={null} persistor={persistor}>
      <TailwindProv utilities={utilities} colorScheme={colorScheme}>
        <NavigationContainer>
          <NavigationScreens />
        </NavigationContainer>
      </TailwindProv>
    </PersistGate>
  );
};

export default Sentry.wrap(App);
