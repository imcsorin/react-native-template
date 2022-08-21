import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION, RootStackParamList} from '../utils/navigation';
import Test from './Test';
import {useTailwind} from 'tailwind-rn/dist';
import {BackArrow} from '../components';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationScreens = () => {
  const tailwind = useTailwind();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerLeft: BackArrow,
        headerTitleAlign: 'center',
        headerStyle: tailwind('bg-white dark:bg-neutral-900 h-12'),
        headerTitleStyle: tailwind(
          'text-neutral-900 dark:text-neutral-50 font-manrope-medium text-lg mr-9',
        ),
        contentStyle: tailwind('bg-white dark:bg-neutral-900'),
      }}>
      <Stack.Screen component={Test} name={NAVIGATION.TEST} />
    </Stack.Navigator>
  );
};

export default NavigationScreens;
