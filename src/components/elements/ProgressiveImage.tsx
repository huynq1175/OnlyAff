import * as React from 'react';
import {FunctionComponent, memo, useCallback, useMemo, useRef} from 'react';
import {ImageStyle, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import FastImage, {
  FastImageProps,
  ImageStyle as FastImageStyle,
  OnLoadEvent,
  OnProgressEvent,
  Source,
} from 'react-native-fast-image';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import PressableScale from './PressableScale';
import {cssInterop} from 'nativewind';

const AnimatedFastImage =
  // @ts-ignore
  Animated.createAnimatedComponent<FastImageProps>(FastImage);

export interface IProgressiveImageProps extends FastImageProps {
  loadingImageComponent?: React.ReactNode;
  source: Source;
  blurRadius?: number;
  errorSource?: any;
  loadingSource?: any;
  thumbnailSource?: any;
  onPress?: () => void;
  activeScale?: number;

  className?: string;
  style?: StyleProp<FastImageStyle>;
  thumbnailClassName?: string;
  thumbnailImageStyle?: StyleProp<ImageStyle>;
  loadingClassName?: string;
  loadingImageStyle?: StyleProp<FastImageStyle>;
  loadingContainerClassName?: string;
  loadingImageContainerStyle?: StyleProp<ViewStyle>;
  thumbnailAnimationDuration?: number;
  imageAnimationDuration?: number;
  useNativeDriver?: boolean;

  onThumbnailLoad?: () => void;

  onLoadStart?(): void;

  onProgress?(event: OnProgressEvent): void;

  onLoad?(event: OnLoadEvent): void;

  onError?(): void;

  onLoadEnd?(): void;
}

const ProgressiveImage: FunctionComponent<IProgressiveImageProps> = memo(
  ({
    style,
    source,
    loadingSource,
    thumbnailSource,
    errorSource,
    thumbnailImageStyle,
    loadingImageContainerStyle,
    loadingImageComponent,
    blurRadius = 15,
    loadingImageStyle,
    onLoad,
    onError: _onError,
    onLoadEnd: _onLoadEnd,
    onThumbnailLoad: _onThumbnailLoad,
    onPress,
    activeScale,
    ...props
  }) => {
    const animatedImage = useSharedValue(0);
    const animatedThumbnailImage = useSharedValue(0);
    const animatedLoadingImage = useSharedValue(1);

    const [error, setError] = React.useState(!source.uri);
    const [imageLoaded, setImageLoaded] = React.useState(false);

    const lastItemIdSource = useRef(source.uri);
    if (lastItemIdSource.current !== source.uri) {
      lastItemIdSource.current = source.uri;
      setError(false);
      setImageLoaded(false);
      animatedImage.value = 0;
      animatedThumbnailImage.value = 0;
      animatedLoadingImage.value = 1;
    }

    const onThumbnailLoad = useCallback(() => {
      animatedLoadingImage.value = withTiming(0, {});
      animatedThumbnailImage.value = withTiming(1, {});
      _onThumbnailLoad?.();
    }, [_onThumbnailLoad, animatedLoadingImage, animatedThumbnailImage]);

    const onImageLoad = useCallback(
      (e: OnLoadEvent) => {
        animatedImage.value = withTiming(1, {}, finished => {
          if (finished) {
            onLoad?.(e);
          }
        });
        setImageLoaded(false);
      },
      [animatedImage, onLoad]
    );

    const onLoadEnd = useCallback(() => {
      _onLoadEnd?.();
    }, [_onLoadEnd]);

    const onError = useCallback(() => {
      setError(true);
      _onError?.();
    }, [_onError]);

    // ? bugfix: FastImage library's `source` null
    const normalisedSource = useMemo(() => {
      const normalised =
        source && typeof source.uri === 'string' && !source.uri.split('http')[1]
          ? null
          : source;
      return source && source.uri ? normalised : source;
    }, [source]);

    const statedSource = useCallback(() => {
      if (!loadingSource) {
        return error ? errorSource : normalisedSource;
      }
      if (!errorSource) {
        return normalisedSource;
      }
      return error
        ? errorSource // ? Error Image
        : normalisedSource;
    }, [error, errorSource, loadingSource, normalisedSource]);

    const loadingStyle = useAnimatedStyle(
      () => ({
        opacity: animatedLoadingImage.value,
      }),
      [animatedLoadingImage]
    );

    const thumbnailStyle = useAnimatedStyle(
      () => ({
        opacity: animatedThumbnailImage.value,
      }),
      [animatedThumbnailImage]
    );

    const imageStyle = useAnimatedStyle(
      () => ({
        opacity: animatedImage.value,
      }),
      [animatedImage]
    );

    return (
      <PressableScale
        style={[styles.container, style]}
        onPress={onPress}
        disabled={!onPress}
        activeScale={activeScale}>
        {loadingImageComponent ||
          (loadingSource && !imageLoaded && (
            <View
              style={[styles.loadingImageStyle, loadingImageContainerStyle]}>
              <AnimatedFastImage
                // @ts-ignore
                resizeMode={'cover'}
                style={[loadingStyle, loadingImageStyle]}
                source={loadingSource}
              />
            </View>
          ))}
        <Animated.Image
          blurRadius={blurRadius}
          source={thumbnailSource}
          onLoad={onThumbnailLoad}
          style={[thumbnailStyle, thumbnailImageStyle]}
        />
        <AnimatedFastImage
          {...props}
          // @ts-ignore
          onError={onError}
          onLoad={onImageLoad}
          onLoadEnd={onLoadEnd}
          style={[styles.imageStyle, imageStyle, style]}
          source={statedSource()}
        />
        {props.children}
      </PressableScale>
    );
  }
);

ProgressiveImage.displayName = 'ProgressiveImage';

cssInterop(ProgressiveImage, {
  className: 'style',
  thumbnailClassName: 'thumbnailImageStyle',
  loadingClassName: 'loadingImageStyle',
  loadingContainerClassName: 'loadingImageContainerStyle',
});

export default ProgressiveImage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  imageStyle: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  loadingImageStyle: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
