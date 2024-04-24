import './global.css';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {Navigation} from 'react-native-navigation';
import {Text, TextInput} from 'react-native';
import {didFinishLaunchingApplication} from './src/App';
import {loadDevMessages, loadErrorMessages} from '@apollo/client/dev';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = Text.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

Navigation.events().registerAppLaunchedListener(didFinishLaunchingApplication);
