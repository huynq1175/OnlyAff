import {Dimensions} from 'react-native';
import {
  AnimationOptions,
  Navigation,
  Options,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import {Colors, Constants, Fonts, Typography} from '@styles';

export const flags = {
  showTextInputToTestKeyboardInteraction: false,
  useCustomAnimations: false,
  useSlowOpenScreenAnimations: false,
  useSlideAnimation: false,
};

const {useCustomAnimations, useSlowOpenScreenAnimations, useSlideAnimation} =
  flags;
const height = Math.round(Dimensions.get('window').height);
const width = Math.round(Dimensions.get('window').width);
const SHOW_DURATION = 250 * (useSlowOpenScreenAnimations ? 2.5 : 1);

const setDefaultOptions = () => {
  const defaultOptions: Options = {
    layout: {
      orientation: ['portrait'],
      backgroundColor: Colors.white['500'],
      componentBackgroundColor: Colors.white['500'],
      adjustResize: false,
    },
    statusBar: {
      style: 'dark',
      visible: true,
      hideWithTopBar: false,
      translucent: true,
      drawBehind: true,
      animate: true,
      backgroundColor: 'transparent',
    },
    animations: {
      ...(useSlideAnimation
        ? slideAnimations
        : useCustomAnimations
          ? customAnimations
          : {}),
    },
    modalPresentationStyle: OptionsModalPresentationStyle.fullScreen,
    bottomTabs: {
      animateTabSelection: false,
      backgroundColor: '#ffffff',
      titleDisplayMode: 'alwaysShow',
      tabsAttachMode: 'onSwitchToTab',
      drawBehind: false,
      hideOnScroll: true,
      animate: true,

      /**
       * DO NOT USE THIS as 0 value will cause the app crash on IOS
       * https://github.com/wix/react-native-navigation/issues/7790#issuecomment-1733628327
       */
      borderWidth: Constants.isIOS ? undefined : 0,
      borderColor: Colors.white['500'],
      hideShadow: true,
    },
    bottomTab: {
      animateBadge: true,
      popToRoot: true,
      fontFamily: Fonts.SFProTextRegular,
      selectedFontSize: 10,
      fontSize: 10,
      badgeColor: Colors.tertiary['500'],
    },
    topBar: {
      height: 48,
      title: {
        ...Typography.headline,
        alignment: 'center',
      },
      noBorder: true,
      elevation: 0,
      borderHeight: 0,
      // borderColor: '#ffffff',
      // backButton: {
      //   icon: require('@assets/icons/linear/arrow-left-1.png'),
      //   color: Colors.dark['500'],
      //   showTitle: false,
      // },
    },
    blurOnUnmount: true,
    navigationBar: {
      backgroundColor: Colors.white['500'],
      visible: false,
    },
  };
  Navigation.setDefaultOptions(defaultOptions);
};

const slideAnimations: AnimationOptions = {
  push: {
    waitForRender: true,
    content: {
      translationX: {
        from: width,
        to: 0,
        duration: SHOW_DURATION,
      },
      alpha: {
        from: 0.7,
        to: 1,
        duration: SHOW_DURATION,
      },
    },
  },
  pop: {
    content: {
      translationX: {
        from: 0,
        to: width,
        duration: SHOW_DURATION,
      },
      alpha: {
        from: 1,
        to: 0.3,
        duration: SHOW_DURATION,
      },
    },
  },
};

const customAnimations: AnimationOptions = {
  showModal: {
    waitForRender: true,
    translationY: {
      from: height,
      to: 0,
      duration: SHOW_DURATION,
      interpolation: {type: 'decelerate'},
    },
    alpha: {
      from: 0.65,
      to: 1,
      duration: SHOW_DURATION * 0.7,
      interpolation: {type: 'accelerate'},
    },
  },
  dismissModal: {
    translationY: {
      from: 0,
      to: height,
      duration: SHOW_DURATION * 0.9,
    },
  },
  push: {
    waitForRender: true,
    content: {
      alpha: {
        from: 0.65,
        to: 1,
        duration: SHOW_DURATION * 0.7,
        interpolation: {type: 'accelerate'},
      },
      translationY: {
        from: height * 0.3,
        to: 0,
        duration: SHOW_DURATION,
        interpolation: {type: 'accelerate'},
      },
    },
  },
  pop: {
    content: {
      alpha: {
        from: 1,
        to: 0,
        duration: SHOW_DURATION,
      },
      translationY: {
        from: 0,
        to: height * 0.7,
        duration: SHOW_DURATION * 0.9,
      },
    },
  },
};

export {setDefaultOptions, slideAnimations, customAnimations};
