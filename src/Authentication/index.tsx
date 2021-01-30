// Navigation
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Routes} from '../components/Navigation';
import Login from './login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
// Import Assets
import Onboarding, {assets as onBoardingAssets} from './Onboarding';
import Welcome, {assets as weolcomeAssets} from './Welcome';
// Export Assets
export const assets = [...onBoardingAssets, ...weolcomeAssets];

const AuthenticationStack = createStackNavigator<Routes>();
export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
      <AuthenticationStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
    </AuthenticationStack.Navigator>
  );
};
