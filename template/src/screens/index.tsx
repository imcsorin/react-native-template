import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION, RootStackParamList} from '../utils/navigation';
import Test from './Test';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Test} name={NAVIGATION.TEST} />
    </Stack.Navigator>
  );
};

export default NavigationScreens;
