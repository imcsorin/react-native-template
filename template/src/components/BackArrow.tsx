import React from 'react';
import Icon from './Icon';
import Touchable from './Touchable';
import {backArrow} from '../assets/svg';
import {HeaderBackButtonProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {useNavigation} from '@react-navigation/native';

const BackArrow = (props: HeaderBackButtonProps) => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return props.canGoBack ? (
    <Touchable onPress={goBack}>
      <Icon xml={backArrow} height="26" width="26" />
    </Touchable>
  ) : null;
};

export default BackArrow;
