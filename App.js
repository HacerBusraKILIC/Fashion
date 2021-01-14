import * as React from 'react';
// Modules
import {NavigationContainer} from '@react-navigation/native';
import {
  AuthenticationNavigator,
  assets as authenticationAssets,
} from './src/Authentication';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// Components
import {LoadAssets, theme} from './src/components';
// Theme Components
import {ThemeProvider} from '@shopify/restyle';
// Assets
const assets = [...authenticationAssets];
// Fonts
const fonts = {
  'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
  'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
  'SFProDisplay-Semibold': require('./assets/fonts/SFProDisplay-Semibold.ttf'),
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
