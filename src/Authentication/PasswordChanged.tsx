import * as React from 'react';
// Modules
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// Components
import {
  Box,
  Button,
  Container,
  Text,
  RoundedIconButton,
  RoundedIcon,
} from '../components';
import {Routes, StackNavigationProps} from '../components/Navigation';
// PasswordChanged
const SIZE = 80;
const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, 'PasswordChanged'>) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box flexDirection="row" justifyContent="center">
          <RoundedIconButton
            name="close"
            color="secondary"
            backgroundColor="white"
            size={60}
            onPress={() => navigation.pop()}
          />
        </Box>
      }>
      <Box flex={1} justifyContent="center" alignItems="center" padding="xl">
        <RoundedIcon
          name="checkmark"
          backgroundColor="primaryLight"
          color="primary"
          size={SIZE}
        />

        <Text variant="title1" textAlign="center" marginVertical="l">
          Your password was succesfully changed
        </Text>
        <Text variant="body" opacity={0.5} textAlign="center" marginBottom="l">
          Close this window and login again
        </Text>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            onPress={() => navigation.navigate('Login')}
            label="Login again"
          />
        </Box>
      </Box>
    </Container>
  );
};
const styles = StyleSheet.create({});

export default PasswordChanged;
