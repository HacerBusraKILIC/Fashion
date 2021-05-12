import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Box, Button} from '../../components';
// Interface
interface FooterProps {
  label: string;
  onPress: () => void;
}
// Footer
const Footer = ({label, onPress}: FooterProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box
      backgroundColor="secondary"
      alignItems="center"
      padding="m"
      borderTopLeftRadius="xl"
      style={{paddingBottom: insets.bottom}}>
      <Button variant="primary" {...{onPress, label}} />
    </Box>
  );
};
export default Footer;
