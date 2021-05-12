import React from 'react';
// Modules
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeRoutes} from '../components/Navigation';
// Components
import DrawerContent, {DRAWER_WIDTH} from './Drawer';
import OutfitIdeas from './OutfitIdeas';
import FavoritesOutfits from './FavoritesOutfits';
export {assets} from './Drawer';

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
  <Drawer.Navigator
    drawerContent={DrawerContent}
    drawerStyle={{width: DRAWER_WIDTH}}>
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    <Drawer.Screen name="FavoritesOutfits" component={FavoritesOutfits} />
  </Drawer.Navigator>
);
