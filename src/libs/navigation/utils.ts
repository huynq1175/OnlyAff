import type {AnimationOptions} from 'react-native-navigation';

const SPRING_CONFIG = {mass: 3, damping: 450, stiffness: 200};
export const SCREEN_TRANSITION_DURATION = 450;

export function buildSharedElementAnimations(
  productId: number
): AnimationOptions {
  return {
    push: {
      waitForRender: false,
      content: {
        alpha: {
          from: 0,
          to: 1,
          duration: SCREEN_TRANSITION_DURATION,
        },
      },
      sharedElementTransitions: [
        // {
        //   fromId: `image-${productId}-background`,
        //   toId: `image-0-${productId}-background`,
        //   duration: SCREEN_TRANSITION_DURATION,
        //   interpolation: {type: 'spring', ...SPRING_CONFIG},
        // },
        {
          fromId: `image-${productId}`,
          toId: `image-0-${productId}`,
          duration: SCREEN_TRANSITION_DURATION,
          interpolation: {type: 'spring', ...SPRING_CONFIG},
        },
        // {
        //   fromId: `title${productId}`,
        //   toId: `title${productId}Dest`,
        //   duration: SCREEN_TRANSITION_DURATION,
        //   interpolation: {type: 'spring', ...SPRING_CONFIG},
        // },
        // {
        //   fromId: `custom-label${productId}`,
        //   toId: `custom-label${productId}Dest`,
        //   duration: SCREEN_TRANSITION_DURATION,
        //   interpolation: {type: 'spring', ...SPRING_CONFIG},
        // },
      ],
    },
    pop: {
      content: {
        alpha: {
          from: 1,
          to: 0,
          duration: SCREEN_TRANSITION_DURATION,
        },
      },
      sharedElementTransitions: [
        // {
        //   fromId: `image-0-${productId}-background`,
        //   toId: `image-${productId}-background`,
        //   duration: SCREEN_TRANSITION_DURATION,
        //   interpolation: {type: 'spring', ...SPRING_CONFIG},
        // },
        {
          toId: `image-${productId}`,
          fromId: `image-0-${productId}`,
          duration: SCREEN_TRANSITION_DURATION,
          interpolation: {type: 'spring', ...SPRING_CONFIG},
        },
        // {
        //   fromId: `title${productId}Dest`,
        //   toId: `title${productId}`,
        //   duration: SCREEN_TRANSITION_DURATION,
        //   interpolation: {type: 'spring', ...SPRING_CONFIG},
        // },
        // {
        //   fromId: `custom-label${productId}Dest`,
        //   toId: `custom-label${productId}`,
        //   duration: SCREEN_TRANSITION_DURATION,
        //   interpolation: {type: 'spring', ...SPRING_CONFIG},
        // },
      ],
    },
  };
}

export function buildFullScreenSharedElementAnimations(
  productId: string,
  index: number
): AnimationOptions {
  return {
    showModal: {
      // enabled: false,
      // waitForRender: true,
      // translationX: {
      //   from: 1,
      //   to: 1,
      // },
      // translationY: {
      //   from: 1,
      //   to: 1,
      // },
      alpha: {
        from: 1,
        to: 1,
        duration: SCREEN_TRANSITION_DURATION,
      },
      sharedElementTransitions: [
        // {
        //   fromId: `background-${productId}`,
        //   toId: `background-${productId}-viewed`,
        //   duration: SCREEN_TRANSITION_DURATION,
        //   interpolation: {type: 'spring', ...SPRING_CONFIG},
        // },
        {
          fromId: `image-${index}-${productId}`,
          toId: `image-${index}-${productId}-viewed`,
          duration: SCREEN_TRANSITION_DURATION,
          interpolation: {type: 'spring', ...SPRING_CONFIG},
        },
      ],
    },
    dismissModal: {
      // alpha: {
      //   from: 0,
      //   to: 0,
      //   duration: SCREEN_TRANSITION_DURATION,
      // },
      sharedElementTransitions: [
        {
          fromId: `image-${index}-${productId}-viewed`,
          toId: `image-${index}-${productId}`,
          duration: SCREEN_TRANSITION_DURATION,
          interpolation: {type: 'spring', ...SPRING_CONFIG},
        },
        // {
        //   toId: `background-${productId}`,
        //   fromId: `background-${productId}-viewed`,
        //   duration: SCREEN_TRANSITION_DURATION,
        //   interpolation: {type: 'spring', ...SPRING_CONFIG},
        // },
      ],
    },
  };
}
