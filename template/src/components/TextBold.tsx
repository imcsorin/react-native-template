import React from 'react';
import {TextProps} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import Text from './Text';

const TextMedium = (props: TextProps) => {
  const tailwind = useTailwind();

  return (
    <Text
      {...props}
      style={[tailwind('font-manrope-bold text-base'), props.style]}
    />
  );
};

export default React.memo(TextMedium);
