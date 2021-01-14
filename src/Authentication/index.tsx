// Navigation
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Routes} from '../components/Navigation';
import Login from './Login';
// Import Assets
import Onboarding, {assets as onBoardingAssets} from './Onboarding';
import Welcome, {assets as weolcomeAssets} from './Welcome';
// Export Components
export {default as Onboarding} from './Onboarding';
export {default as Welcome} from './Welcome';
export {default as Login} from './Login';
// Export Assets
export const assets = [...onBoardingAssets, ...weolcomeAssets];

const AuthenticationStack = createStackNavigator<Routes>();
export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};
