import React from 'react';
// Modules
import {RectButton} from 'react-native-gesture-handler';
import {Text, Box, Theme, useTheme} from '../../components/Theme';
// Components
import {RoundedIcon} from '../../components';
import {HomeRoutes} from '../../components/Navigation';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
// Interface
export interface DrawerItemProps {
  icon: string;
  label: string;
  screen: keyof HomeRoutes;
  color: keyof Theme['colors'];
}
// DrawerItem
const DrawerItem = ({icon, label, screen, color}: DrawerItemProps) => {
  const theme = useTheme();
  const {navigate} = useNavigation<
    DrawerNavigationProp<HomeRoutes, 'OutfitIdeas'>
  >();
  return (
    <RectButton
      onPress={() => navigate(screen)}
      style={{borderRadius: theme.borderRadii.m}}>
      <Box flexDirection="row" alignItems="center" padding="s">
        <RoundedIcon
          iconRatio={0.5}
          name={icon}
          size={36}
          backgroundColor={color}
          color={'white'}
        />
        <Text variant="button" color="secondary" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};
export default DrawerItem;
