import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RoundedIconButton from './RoundedIconButton';
import {Box, Text} from './Theme';

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
  dark: boolean;
}

const Header = ({left, title, right, dark}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? 'white' : 'secondary';
  const backgroundColor = dark ? 'secondary' : 'lightGrey';
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="m"
      style={{marginTop: insets.top}}>
      <RoundedIconButton
        name={left.icon}
        size={44}
        iconRatio={0.4}
        onPress={left.onPress}
        {...{color, backgroundColor}}
      />
      <Text variant="header" {...{color}}>
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        name={right.icon}
        size={44}
        iconRatio={0.4}
        onPress={right.onPress}
        {...{color, backgroundColor}}
      />
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};
export default Header;
