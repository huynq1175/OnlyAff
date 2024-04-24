import React, {FC, useEffect} from 'react';
import Animated, {
  Easing,
  FadeIn,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Defs, G, Path, SvgProps, Rect, ClipPath} from 'react-native-svg';

interface Props extends SvgProps {
  size?: number;
}

const ActivityIndicatorLoading: FC<Props> = ({
  color = '#ffffff',
  size = 26,
}) => {
  const rotation = useSharedValue(0);
  const rotateStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation.value}deg`}],
    };
  });

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {duration: 700, easing: Easing.linear}),
      -1,
      false
    );

    return () => {
      cancelAnimation(rotation);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View entering={FadeIn.duration(300)} style={rotateStyle}>
      <Svg width={size} height={size} viewBox="0 0 26 27" fill="none">
        <G clip-path="url(#clip0_3518_39488)">
          <Path
            opacity="0.4"
            d="M22.2782 9.59697C23.016 11.432 23.193 13.4447 22.7869 15.3803C22.3808 17.316 21.4099 19.0878 19.9968 20.4717C18.5838 21.8555 16.7921 22.7893 14.8484 23.1548C12.9046 23.5204 10.8962 23.3014 9.0769 22.5255C7.25764 21.7496 5.70932 20.4516 4.62773 18.7957C3.54615 17.1399 2.97987 15.2005 3.00052 13.2227C3.02117 11.245 3.62781 9.31788 4.74373 7.68495C5.85966 6.05201 7.43474 4.78666 9.2698 4.0489C11.7308 3.06259 14.4826 3.09281 16.9213 4.13293C19.36 5.17305 21.2866 7.13812 22.2782 9.59697ZM5.26811 16.4356C5.88291 17.9648 6.93736 19.2774 8.29814 20.2073C9.65892 21.1373 11.2649 21.6428 12.913 21.66C14.5611 21.6772 16.1772 21.2053 17.5571 20.304C18.937 19.4027 20.0187 18.1124 20.6653 16.5964C21.3119 15.0803 21.4944 13.4066 21.1897 11.7868C20.8851 10.167 20.1069 8.67397 18.9537 7.49643C17.8005 6.31889 16.324 5.50976 14.711 5.17136C13.0979 4.83295 11.4207 4.98048 9.8915 5.59528C7.84247 6.42167 6.20494 8.02713 5.33818 10.0594C4.47142 12.0917 4.44622 14.3848 5.26811 16.4356Z"
            fill="#7F8596"
          />
          <Path
            d="M9.26975 4.04889L9.89145 5.59527C7.84242 6.42166 6.20489 8.02712 5.33813 10.0594C4.47136 12.0917 4.44616 14.3848 5.26805 16.4356L3.72168 17.0573C2.73536 14.5963 2.76558 11.8446 3.8057 9.40582C4.84582 6.96707 6.81089 5.04053 9.26975 4.04889Z"
            fill={color}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_3518_39488">
            <Rect
              width="20"
              height="20"
              fill="white"
              transform="translate(7.4519 26.3356) rotate(-111.902)"
            />
          </ClipPath>
        </Defs>
      </Svg>
    </Animated.View>
  );
};
export default React.memo(ActivityIndicatorLoading);
