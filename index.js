/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Name from './src/screen/Name';
import Email from './src/screen/email';
import Login from './src/screen/Login';
import YourFormScreen from './src/screen/Name';
import Home from './src/screen';


AppRegistry.registerComponent(appName, () => Home);
