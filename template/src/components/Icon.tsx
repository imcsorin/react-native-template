import React from 'react';
import {SvgCss, XmlProps} from 'react-native-svg';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {extractTextColor} from '../utils/tailwind';

const Icon = (
  props: {
    fill?: string;
    backgroundColor?: string;
  } & XmlProps,
) => {
  const tailwind = useTailwind();
  const {
    fill = extractTextColor(tailwind('text-neutral-900 dark:text-neutral-50')),
    backgroundColor,
  } = props;
  // Sometimes we get weird xml with \ because it was escaped or something.
  const newXml = props.xml ? props.xml.replace('\\', '') : '<svg />';
  if (backgroundColor) {
    return (
      <View
        style={[
          tailwind('p-0.5 rounded-full'),
          props.style,
          {backgroundColor},
        ]}>
        <SvgCss fill={fill} {...props} xml={newXml} />
      </View>
    );
  }

  return <SvgCss fill={fill} {...props} xml={newXml} />;
};

export default React.memo(Icon);
