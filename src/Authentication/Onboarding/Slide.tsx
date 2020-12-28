import * as React from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';
// interface
interface SlideProps {
  key: number;
  title: String;
  right?: boolean;
  picture: number;
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
      <View style={styles.underlay}>
        <Image source={picture} style={styles.image} />
      </View>
      <View style={[styles.titleContainer, {transform}]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};
const {width, height} = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.57 * height;
const styles = StyleSheet.create({
  container: {width, overflow: 'hidden'},
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  title: {
    fontSize: 80,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    lineHeight: 80,
  },
});
export default Slide;
