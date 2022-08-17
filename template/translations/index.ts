import {I18n} from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import memoize from 'lodash/memoize';
import {I18nManager} from 'react-native';
import React from 'react';
import en from './en.json';

const i18n = new I18n({en});

const translate: any = memoize(
  (key: string, config: any) => i18n.t(key, config).toString(),
  (key: string, config: any) => (config ? key + JSON.stringify(config) : key),
);

const setTranslationConfig = () => {
  // fallback if no available language fits
  const fallback = {languageTag: 'en', isRTL: false};

  const {languageTag, isRTL} =
    RNLocalize.findBestAvailableLanguage(Object.keys(i18n)) || fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);

  // set i18n-js config
  i18n.locale = languageTag;
};

const useTranslationFinder = () => {
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);

  const handleTranslationUpdate = () => {
    setTranslationConfig();
    forceUpdate();
  };

  React.useEffect(() => {
    RNLocalize.addEventListener('change', handleTranslationUpdate);

    return () => {
      RNLocalize.removeEventListener('change', handleTranslationUpdate);
    };
  });
};

export {useTranslationFinder, i18n};
