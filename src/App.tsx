import SplashScreen from 'react-native-splash-screen';
import {Application} from '@modules/application';
import {persistor, store} from '@redux/store.ts';
import {Navigation} from 'react-native-navigation';
import {registerScreensWithApplication, Screens} from '@screens';
import {setDefaultOptions} from '@libs/navigation';

export async function didFinishLaunchingApplication() {
  const application = new Application({
    store,
    persistor,
  });

  await application.init();
  setDefaultOptions();
  registerScreensWithApplication(application);

  if (application.isInitialized) {
    startWithApplication(application);

    SplashScreen.hide();
  } else {
    console.error('Application is not initialized');
    SplashScreen.hide();
  }
}

export function startWithApplication(_application: Application): void {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        // options: {
        //   bottomTabs: {
        //     testID: testIDs.MAIN_BOTTOM_TABS,
        //   },
        // },
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: Screens.Home,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Layouts',
                  icon: require('@assets/icons/navigation/home-2.png'),
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: Screens.BlankPage,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Layouts',
                  icon: require('@assets/icons/navigation/shop.png'),
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: Screens.BlankPage,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Layouts',
                  icon: require('@assets/icons/navigation/frame.png'),
                },
              },
            },
          },
        ],
      },
    },
  });
}
