import React from 'react';
// Components
import Icon from 'react-native-vector-icons/Ionicons';
import {Box, Text, Theme} from './Theme';

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme['colors'];
  backgroundColor: keyof Theme['colors'];
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
}: RoundedIconProps) => {
  const iconSize = size * 0.7;

  return (
    <Box
      margin="s"
      height={size}
      width={size}
      justifyContent="center"
      alignItems="center"
      style={{borderRadius: size / 2}}
      {...{backgroundColor}}>
      <Text style={{width: iconSize, height: iconSize}} {...{color}}>
        <Icon size={iconSize} {...{name, color}} />
      </Text>
    </Box>
  );
};
export default RoundedIcon;
