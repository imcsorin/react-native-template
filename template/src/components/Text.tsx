import React from 'react';
import {Text, TextProps} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';

const TextMain = (props: TextProps) => {
  const tailwind = useTailwind();

  return (
    <Text
      style={tailwind('text-neutral-900 dark:text-neutral-50')}
      {...props}
    />
  );
};

export default React.memo(TextMain);
