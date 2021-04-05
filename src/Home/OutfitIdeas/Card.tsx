import React, {useEffect} from 'react';
// Modules
import {Dimensions, ImageRequireSource, StyleSheet} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {add, Extrapolate, interpolate} from 'react-native-reanimated';
import {
  mix,
  mixColor,
  usePanGestureHandler,
} from 'react-native-redash/lib/module/v1';
import {Box} from '../../components/Theme';
import {useSpring} from './Animations';
// Constants
const {width: wWidth} = Dimensions.get('window');
const width = wWidth * 0.7;
const height = wWidth * (425 / 410);
const borderRadius = 24;
// Interface
interface CardProps {
  position: Animated.Node<number>;
  onSwipe: () => void;
  source: ImageRequireSource;
  step: number;
}
// Card
const Card = ({position, onSwipe, source, step}: CardProps) => {
  const {gestureHandler, translation, velocity, state} = usePanGestureHandler();
  const backgroundColor = mixColor(position, '#C9E9E7', '#74BCB8');
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  const imageScale = interpolate(position, {
    inputRange: [0, step],
    outputRange: [1.2, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const translateX = useSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-wWidth, 0, wWidth],
    onSnap: ([x]) => x !== 0 && onSwipe(),
  });
  const translateY = add(
    translateYOffset,
    useSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0],
    }),
  );
  // useEffect(() => {
  //   console.log(translateX);
  // }, [translateX]);
  return (
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center">
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor,
            width,
            height,
            borderRadius,
            transform: [{translateX}, {translateY}, {scale}],
            overflow: 'hidden',
          }}>
          <Animated.Image
            {...{source}}
            style={{
              ...StyleSheet.absoluteFillObject,
              width: undefined,
              height: undefined,
              transform: [{scale: imageScale}],
            }}
          />
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};
export default Card;
