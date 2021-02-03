import * as React from 'react';
// Modules
import {StyleSheet, Image, Dimensions} from 'react-native';
// Components
import {Button} from '../components';
import {Routes, StackNavigationProps} from '../components/Navigation';
import {Box, Text, useTheme} from '../components/Theme';
// Contracts
const {width} = Dimensions.get('window');
// Welcome
const picture = {
  src: require('./assets/5.png'),
  width: 3383,
  height: 5074,
};
// Export Welcome Assets
export const assets = [picture.src];
const Welcome = ({navigation}: StackNavigationProps<Routes, 'Welcome'>) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end">
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderBottomLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          flex={1}
          alignItems="center"
          justifyContent="space-evenly"
          padding="xl">
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate('Login')}
          />
          <Button label="Join us, it's Free" />
          <Button variant="transparent" label="Forgot Password" />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({});
export default Welcome;
