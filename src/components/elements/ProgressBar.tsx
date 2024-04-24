import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import ActivityIndicatorLoading from './ActivityIndicatorLoading';
import {cssInterop} from 'nativewind';

type Props = {
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  color?: string;
  size?: number;
  className?: string;
};

const ProgressBar: React.FC<Props> = React.memo(
  ({style, color, loading, size}) => (
    <View
      className={'h-full w-full items-center justify-center'}
      style={[style]}>
      {loading ? (
        <ActivityIndicatorLoading
          style={{backgroundColor: 'transparent'}}
          color={color}
          size={size}
        />
      ) : null}
    </View>
  )
);

cssInterop(ProgressBar, {
  className: 'style',
});

export default ProgressBar;

ProgressBar.defaultProps = {
  size: 24,
  color: 'gray',
  loading: true,
};
