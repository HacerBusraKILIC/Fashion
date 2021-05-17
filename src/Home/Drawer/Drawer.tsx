import React from 'react';
// Modules
import {Dimensions, Image} from 'react-native';
// Components
import {Box, Header} from '../../components';
import {Text, theme} from '../../components/Theme';
import DrawerItem, {DrawerItemProps} from './DrawerItem';
// Constract
const {width} = Dimensions.get('window');
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 744 / 1994;
const height = DRAWER_WIDTH * aspectRatio;
export const assets = [require('../../components/assets/drawer.png')];
const items: DrawerItemProps[] = [
  {
    icon: 'flash',
    label: 'Outfit Ideas',
    screen: 'OutfitIdeas',
    color: 'primary',
  },
  {
    icon: 'heart',
    label: 'Favorites Outfits',
    screen: 'FavoritesOutfits',
    color: 'orange',
  },
  {
    icon: 'person',
    label: 'Edit Profile',
    screen: 'FavoritesOutfits',
    color: 'yellow',
  },
  {
    icon: 'time',
    label: 'Transaction History',
    screen: 'TransactionHistory',
    color: 'pink',
  },
  {
    icon: 'settings',
    label: 'Notification Settings',
    screen: 'FavoritesOutfits',
    color: 'violet',
  },
  {
    icon: 'log-out',
    label: 'Logout',
    screen: 'FavoritesOutfits',
    color: 'secondary',
  },
];
/*    onPress: (navigation) =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Authentication" }],
        })
      ),*/
// Drawer
const Drawer = () => {
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary">
          <Header
            title="MY PROFILE"
            left={{
              icon: 'close',
              onPress: () => true,
            }}
            right={{icon: 'cart', onPress: () => true}}
            dark={true}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          padding="xl">
          <Box
            position="absolute"
            top={-50}
            backgroundColor="primary"
            width={100}
            height={100}
            borderRadius="xl"
            alignSelf="center"
          />
          <Box marginVertical="m">
            <Text variant="title2" textAlign="center">
              Mike Peter
            </Text>
            <Text variant="body" textAlign="center">
              mike@flexinStudio.com
            </Text>
          </Box>
          {items.map((item) => (
            <DrawerItem key={item.icon} {...item} />
          ))}
        </Box>
      </Box>
      <Box
        backgroundColor="white"
        width={DRAWER_WIDTH}
        height={height * 0.61}
        overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};
export default Drawer;
