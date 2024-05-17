import {styled} from 'nativewind';
import React from 'react';
import {View, ViewStyle} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

const TouchFiller = ({
  onPress,
  borderRadius = 0,

  zIndex = 1,
  style = {},
}: {
  onPress?: () => void;
  borderRadius?: number;

  zIndex?: number;
  style?: ViewStyle;
}) => {
  return (
    <View
      className={'overflow-hidden absolute h-full w-full'}
      style={[
        {
          borderRadius,
          zIndex,
        },
        style,
      ]}>
      <TouchableRipple className="grow self-stretch" onPress={onPress}>
        <View />
      </TouchableRipple>
    </View>
  );
};

export default styled(TouchFiller);
