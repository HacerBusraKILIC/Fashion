import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageRequireSource,
} from 'react-native';
// Theme Components
import {Text} from '../../components';
// interface
interface SlideProps {
  key: number;
  title: String;
  right?: boolean;
  picture: {
    src: ImageRequireSource;
    width: number;
    height: number;
  };
}
export const BORDER_RADIUS = 75;
// Slide
const Slide = ({title, right, picture}: SlideProps) => {
  const transform = [
    {translateY: (SLIDE_HEIGHT - 100) / 2},
    {translateX: right ? width / 2 - 50 : -width / 2 + 50},
    {rotate: right ? '-90deg' : '90deg'},
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, {transform}]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  );
};
const {width, height} = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.55 * height;
const styles = StyleSheet.create({
  container: {width, overflow: 'hidden'},
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
});
export default Slide;
