import React from 'react';
import {requireNativeComponent, StyleProp, ViewStyle} from 'react-native';

type RNNativeButtonProps = {
  style?: StyleProp<ViewStyle>;
  text: string;
  textColor: string;
  enabled: boolean;
  onPress?: (event: any) => void;
};

const RNNativeButton =
  requireNativeComponent<RNNativeButtonProps>('NativeButton');

type Props = {
  style?: StyleProp<ViewStyle>;
  text: string;
  textColor: string;
  enabled: boolean;
  onPress?: () => void;
};

const NativeButton = ({style, text, textColor, enabled, onPress}: Props) => {
  return (
    <RNNativeButton
      style={style}
      text={text}
      textColor={textColor}
      enabled={enabled}
      onPress={onPress}
    />
  );
};

export default NativeButton;
