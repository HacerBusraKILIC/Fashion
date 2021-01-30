import * as React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
// Modules
import {Box, Text} from '../../components/Theme';
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
        <TouchableWithoutFeedback {...{onPress}}>
          <Text>
            <Text variant="button" color="white">
              {`${title} `}
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              {`${action}`}
            </Text>
          </Text>
        </TouchableWithoutFeedback>
      </Box>
    </>
  );
};

export default Footer;
