import * as React from 'react';
// Modules
import {Box, Text} from '../../components/Theme';
import {BorderlessButton} from 'react-native-gesture-handler';
// Components
import SocialLogin from './SocialLogin';
// Interface
interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}
// Footer
const Footer = ({onPress, title, action}: FooterProps) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" marginTop="m">
        <BorderlessButton {...{onPress}}>
          <Text>
            <Text variant="button" color="white">
              {`${title} `}
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              {`${action}`}
            </Text>
          </Text>
        </BorderlessButton>
      </Box>
    </>
  );
};

export default Footer;
