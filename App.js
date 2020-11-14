import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import LoaderScreen from './src/screens/LoaderScreen';
import { Provider as AuthProvider } from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef';

const switchNav = createAnimatedSwitchNavigator({
  Loader: LoaderScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
  }, {
    defaultNavigationOptions: {
      title: 'My Tracks App - LoginFlow',
    },
    initialRouteName: 'Signup',
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      List: TrackListScreen,
      Detail: TrackDetailScreen,
    }),
    Create: TrackCreateScreen,
    Account: AccountScreen,
  })
}, {
  initialRouteName: 'Loader',
  // defaultNavigationOptions: {
  //   title: 'My Tracks App',
  // },
});

const App = createAppContainer(switchNav);

export default () => (
  <AuthProvider>
    <App ref={(navigator) => { setNavigator(navigator) }} />
  </AuthProvider>
);
