import * as React from 'react';
// Modules
import {NavigationContainer} from '@react-navigation/native';
import {
  AuthenticationNavigator,
  assets as authenticationAssets,
} from './src/Authentication';
import {HomeNavigator} from './src/Home';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// Components
import {LoadAssets} from './src/components';
// Theme Components
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/components/Theme';
import {createStackNavigator} from '@react-navigation/stack';
// Assets
const assets = [...authenticationAssets];
// Fonts
const fonts = {
  'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
  'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
  'SFProDisplay-Semibold': require('./assets/fonts/SFProDisplay-Semibold.ttf'),
};
type AppStackRoutes = {
  Authentication: undefined;
  Home: undefined;
};
const AppStack = createStackNavigator<AppStackRoutes>();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
            />
            <AppStack.Screen name="Home" component={HomeNavigator} />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
