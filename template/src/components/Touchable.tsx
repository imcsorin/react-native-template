import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

const Touchable = (props: TouchableOpacityProps) => {
  return <TouchableOpacity activeOpacity={0.5} {...props} />;
};

export default React.memo(Touchable);
