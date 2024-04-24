import {Appearance, Dimensions, I18nManager, Platform} from 'react-native';
import type {NavigationConstants} from 'react-native-navigation';

const orientations = {
  PORTRAIT: 'portrait',
  LANDSCAPE: 'landscape',
};

const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';
let screenHeight = Dimensions.get('screen').height;
let screenWidth = Dimensions.get('screen').width;
let windowHeight = Dimensions.get('window').height;
let windowWidth = Dimensions.get('window').width;

const appInsets = {top: 0, bottom: 0, left: 0, right: 0};

let navigationConstants: NavigationConstants = {
  statusBarHeight: 0,
  backButtonId: '',
  topBarHeight: 0,
  bottomTabsHeight: 0,
};

function getOrientation(height: number, width: number) {
  return width < height ? orientations.PORTRAIT : orientations.LANDSCAPE;
}

export function updateConstants(dimensions: any) {
  screenHeight = dimensions.screen.height;
  screenWidth = dimensions.screen.width;
  windowWidth = dimensions.window.width;
  windowHeight = dimensions.window.height;
}

const Constants = {
  /* Platform */
  orientations,
  isAndroid,
  isIOS,
  safeAreaInsets: appInsets,
  isRTL: I18nManager.isRTL,
  get screenWidth() {
    return screenWidth;
  },
  get screenHeight() {
    return screenHeight;
  },
  get windowWidth() {
    return windowWidth;
  },
  get windowHeight() {
    return windowHeight;
  },

  get navigation() {
    return navigationConstants;
  },
  set navigation(values: NavigationConstants) {
    navigationConstants = values;
  },

  get orientation() {
    return getOrientation(screenHeight, screenWidth);
  },

  colorScheme: Appearance.getColorScheme(),

  getRatioDimensions: ({
    width,
    ratio,
    extraH = 0,
  }: {
    width: number;
    ratio: number;
    extraH?: number;
  }) => {
    const height = width / ratio;
    return {
      item: {
        width: width,
        height: height + extraH,
      },
      image: {
        width: width,
        height: height,
      },
    };
  },
};

Dimensions.addEventListener('change', updateConstants);

export default Constants;
