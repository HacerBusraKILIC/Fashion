import * as React from 'react';
// Modules
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from './src/components/Navigation';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AuthenticationNavigator,
  assets as authenticationAssets,
} from './src/Authentication';
import {HomeNavigator, assets as homeAssets} from './src/Home';
// Components
import {LoadAssets} from './src/components';
// Theme Components
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/components/Theme';
// Assets
const assets = [...authenticationAssets, homeAssets];
// Fonts
const fonts = {
  'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
  'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
  'SFProDisplay-Semibold': require('./assets/fonts/SFProDisplay-Semibold.ttf'),
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            {/*<AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
            />*/}
            <AppStack.Screen name="Home" component={HomeNavigator} />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
