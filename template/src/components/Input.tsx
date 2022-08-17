import React from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';

export default () => {
  const tailwind = useTailwind();

  return <View style={tailwind('h-full font-manrope-bold')} />;
};
