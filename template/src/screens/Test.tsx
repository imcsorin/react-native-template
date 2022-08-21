import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {i18n} from '../../translations';
import {Touchable, Text} from '../components';
import {NAVIGATION, RootStackParamList} from '../utils/navigation';

const Test = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, NAVIGATION.TEST>) => {
  const from = route.params?.from ?? '';

  const addToStack = () => {
    navigation.push(NAVIGATION.TEST, {from: `${Math.random()}`});
  };

  return (
    <View>
      <Text>
        {i18n.t('testString')} {from}
      </Text>
      <Touchable onPress={addToStack}>
        <Text>Touch me!</Text>
      </Touchable>
    </View>
  );
};

export default Test;
