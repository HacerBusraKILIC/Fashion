import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RoundedIconButton from './RoundedIconButton';
import {Box, Text, useTheme} from './Theme';

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  right: {
    icon: string;
    onPress: () => void;
  };
}

const Header = ({left, title, right}: HeaderProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="m"
      style={{marginTop: insets.top}}>
      <RoundedIconButton
        name={left.icon}
        size={24}
        color="white"
        backgroundColor="secondary"
        onPress={left.onPress}
      />
      <Text variant="header" color="white">
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        name={right.icon}
        size={24}
        color="white"
        backgroundColor="secondary"
        onPress={right.onPress}
      />
    </Box>
  );
};
export default Header;
