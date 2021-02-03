import * as React from 'react';
// Nodules
import {StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
// Components
import {Box, Text} from './Theme';
// Interface
interface CloseButtonProps {
  onPress: () => void;
}
// CloseButton
const SIZE = 60;
const CloseButton = ({onPress}: CloseButtonProps) => {
  return (
    <RectButton {...{onPress}}>
      <Box
        style={{
          height: SIZE,
          width: SIZE,
          borderRadius: SIZE / 2,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text color="secondary" textAlign="center">
          <Icon name="close" size={45} />
        </Text>
      </Box>
    </RectButton>
  );
};
const styles = StyleSheet.create({});

export default CloseButton;
