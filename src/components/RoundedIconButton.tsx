import React from 'react';
// Modules
import RoundedIcon, {RoundedIconProps} from './RoundedIcon';
import {RectButton} from 'react-native-gesture-handler';
// Interface
interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}
// RoundedIconButton
const RoundedIconButton = ({onPress, ...props}: RoundedIconButtonProps) => {
  return (
    <RectButton {...{onPress}}>
      <RoundedIcon {...props} />
    </RectButton>
  );
};
export default RoundedIconButton;
