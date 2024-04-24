import {Dimensions, Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';

const {width, height} = Dimensions.get('window');

// design screen size
const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

const scale = (size: number) => {
  return (width / guidelineBaseWidth) * size;
};

const verticalScale = (size: number) => (height / guidelineBaseHeight) * size; // getHeight screen
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor; // padding

const paddingIOS = Platform.OS === 'ios' ? 'padding' : '';
export {scale, verticalScale, moderateScale, paddingIOS};

export const getTabBarHeight = () => {
  'worklet';
  return Navigation.constantsSync();
};
