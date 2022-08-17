import React from 'react';
import {Text, View} from 'react-native';
import {i18n} from '../../translations';

const Test = () => {
  return (
    <View>
      <Text>{i18n.t('testString')}</Text>
    </View>
  );
};

export default Test;
