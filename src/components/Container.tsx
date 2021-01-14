import React, {ReactNode} from 'react';
// Modules
import {Dimensions, Image, StyleSheet, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// Theme Modules
import theme, {Box} from './Theme';
// interface
interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}
// Assets
export const assets = [require('./assets/patterns/1.png')];
// Constract
const {width} = Dimensions.get('window');
const aspectRatio = 744 / 1994;
const height = width * aspectRatio;
// Container
const Container = ({children, footer}: ContainerProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.61}>
          <Image
            source={assets[0]}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <Box
          borderRadius="xl"
          backgroundColor="white"
          borderTopLeftRadius={0}
          flex={1}>
          {children}
        </Box>
      </Box>
      <Box backgroundColor="secondary" paddingTop="m">
        {footer}
        <Box height={insets.bottom} />
      </Box>
    </Box>
  );
};
const styles = StyleSheet.create({});

export default Container;
