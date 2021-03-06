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
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { setNavigator } from './src/navigationRef';
import { FontAwesome } from '@expo/vector-icons';

const trackListFlow = createStackNavigator({
  List: TrackListScreen,
  Detail: TrackDetailScreen,
});

trackListFlow.navigationOptions = {
  title: 'My Tracks',
  tabBarIcon: <FontAwesome name='list' size={20} />
};

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
    MyTracks: trackListFlow,
    Create: TrackCreateScreen,
    Account: AccountScreen,
  })
}, {
  initialRouteName: 'Loader',
});

const App = createAppContainer(switchNav);

export default () => (
  <AuthProvider>
    <TrackProvider>
      <LocationProvider>
        <App ref={(navigator) => { setNavigator(navigator) }} />
      </LocationProvider> 
    </TrackProvider>
  </AuthProvider>
);
