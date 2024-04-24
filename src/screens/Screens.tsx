import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Application, ApplicationProvider} from '@modules/application';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {BlankPage} from '@libs/navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import Home from '@screens/home';

export const Screens = {
  BlankPage: 'BlankPage',
  Home: 'Home',
};

export const registerScreensWithApplication = (application: Application) => {
  Navigation.registerComponent(
    Screens.Home,
    () =>
      gestureHandlerRootHOC(props => {
        return (
          <ApplicationProvider application={application}>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
              <Home {...props} />
            </SafeAreaProvider>
          </ApplicationProvider>
        );
      }),
    () => Home
  );
  Navigation.registerComponent(Screens.BlankPage, () => BlankPage);
};
