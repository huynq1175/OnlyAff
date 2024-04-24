import React, {FunctionComponent} from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Colors, Fonts} from '@styles';
import {renderNode} from '@utils';

export interface BadgeProps extends PressableProps {
  /** Style for the container. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Additional styling for badge (background) view component. */
  badgeStyle?: StyleProp<ViewStyle>;

  /** Extra props for text component. */
  textProps?: TextProps;

  /** Extra styling for icon component. */
  textStyle?: StyleProp<TextStyle>;

  /** Text value to be displayed by badge, defaults to empty. */
  value?: React.ReactNode;

  /** Custom component to replace the badge outer component.
   *  @default `Press handlers present then Pressable else View`
   */
  Component?: typeof React.Component;

  /** Determines color of the indicator. */
  status?: 'primary' | 'success' | 'warning' | 'error';
}

/** Badges are small components typically used to communicate a numerical value or indicate the status of an item to the user. */
const Badge: FunctionComponent<BadgeProps> = ({
  containerStyle,
  textStyle,
  textProps,
  badgeStyle,
  onPress,
  onLongPress,
  onPressOut,
  onPressIn,
  Component = onPress || onLongPress || onPressIn || onPressOut
    ? Pressable
    : View,
  value,
  ...rest
}) => {
  const element = renderNode(Text, value, {
    style: StyleSheet.flatten([styles.text, textStyle && textStyle]),
    ...textProps,
  });

  return (
    <View
      testID="RNE__Badge__Container"
      style={StyleSheet.flatten([containerStyle && containerStyle])}>
      <Component
        {...{
          onPress,
          onLongPress,
          onPressOut,
          onPressIn,
          ...rest,
        }}
        testID="RNE__Badge"
        style={StyleSheet.flatten([
          {
            alignSelf: 'center',
            minWidth: size,
            height: size,
            borderRadius: size / 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.tertiary['500'],
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: '#fff',
          },
          !element && styles.miniBadge,
          badgeStyle && badgeStyle,
        ])}>
        {element}
      </Component>
    </View>
  );
};

const size = 16;
const miniSize = 8;

const styles = StyleSheet.create({
  miniBadge: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    minWidth: miniSize,
    height: miniSize,
    borderRadius: miniSize / 2,
  },
  text: {
    fontFamily: Fonts.SFProTextRegular,
    lineHeight: 14,
    fontSize: 12,
    color: Colors.white['500'],
    paddingHorizontal: 4,
  },
});

Badge.displayName = 'Badge';

export default Badge;
