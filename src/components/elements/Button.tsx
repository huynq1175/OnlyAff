import React, {FunctionComponent, useCallback} from 'react';
import {
  Insets,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from '@styles';
import ProgressBar from './ProgressBar';
import Animated, {AnimatedProps} from 'react-native-reanimated';
import {cssInterop} from 'nativewind';
import {debounce} from 'lodash';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

interface Props extends AnimatedProps<TouchableOpacityProps> {
  hitSlop?: Insets;
  label?: string | number | null;
  labelStyle?: StyleProp<TextStyle>;
  labelClass?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  // className?: string;
  indicatorStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
  nativeID?: string;
  children?: React.ReactNode;
  debouncePress?: boolean;
}

const Button: FunctionComponent<Props> = React.memo(
  ({
    onPress,
    label,
    disabled,
    children,
    loading,
    style,
    hitSlop = {top: 8, bottom: 8, left: 8, right: 8},
    labelStyle,
    nativeID,
    indicatorStyle,
    debouncePress,
    ...touchableProps
  }) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const press = useCallback(
      debounce(() => onPress?.(), 300, {trailing: true}),
      [onPress]
    );

    return (
      <AnimatedTouchable
        className={'flex-row items-center justify-center'}
        activeOpacity={0.85}
        onPress={debouncePress ? press : onPress}
        disabled={disabled || loading}
        hitSlop={hitSlop}
        style={style}
        {...touchableProps}>
        {label ? (
          <Text style={[labelStyle]} className={'body flex items-center'}>
            {label}
          </Text>
        ) : null}

        {children}
        {loading && (
          <View
            pointerEvents={'none'}
            className={'absolute bottom-0 left-0 right-0 top-0 bg-white-500/60'}
            style={[indicatorStyle]}
            nativeID={nativeID}>
            <ProgressBar color={Colors.dark['500']} />
          </View>
        )}
        {disabled && (
          <View
            pointerEvents={'none'}
            className={'absolute bottom-0 left-0 right-0 top-0 bg-white-500/60'}
          />
        )}
      </AnimatedTouchable>
    );
  }
);

cssInterop(Button, {
  className: 'style',
  labelClass: 'labelStyle',
});

export default Button;
