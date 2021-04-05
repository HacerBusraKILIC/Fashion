import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Box, useTheme} from '../../components';
// Background
const Background = () => {
  const theme = useTheme();
  return (
    <View style={StyleSheet.absoluteFill}>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box
          flex={1}
          backgroundColor="white"
          borderBottomRightRadius="xl"></Box>
      </Box>
      <Box flex={1 / 3} backgroundColor="white">
        <Box flex={1} backgroundColor="white" />
        <Box flex={1} backgroundColor="secondary" />
        <Image
          source={require('./assets/background.png')}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderBottomRightRadius: theme.borderRadii.xl,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        <Box
          flex={1}
          backgroundColor="secondary"
          borderTopLeftRadius="xl"></Box>
      </Box>
    </View>
  );
};

export default Background;
