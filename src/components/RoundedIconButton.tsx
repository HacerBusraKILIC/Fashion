import React from 'react';
// Modules
import RoundedIcon, {RoundedIconProps} from './RoundedIcon';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
// Interface
interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}
// RoundedIconButton
const RoundedIconButton = ({onPress, ...props}: RoundedIconButtonProps) => {
  return (
    <BorderlessButton {...{onPress}}>
      <RoundedIcon {...props} />
    </BorderlessButton>
  );
};
export default RoundedIconButton;
