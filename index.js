import {AppRegistry} from 'react-native';

import { registerRootComponent } from 'expo';

import App from './App';
console.log('getAppKeys()=',AppRegistry.getAppKeys());
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);