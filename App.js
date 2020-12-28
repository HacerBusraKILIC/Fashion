import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Onboarding} from './src/Authentication';
import {LoadAssets} from './src/components';

const fonts = {
  'SFProText-Regular': require('./assets/fonts/FontsFree-Net-SFProText-Regular.ttf'),
};

const AuthenticationStack = createStackNavigator();
const AuthenticationContainer = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="OnBoarding" component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationContainer />
    </NavigationContainer>
  );
}
