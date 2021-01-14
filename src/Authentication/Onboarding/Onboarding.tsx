import * as React from 'react';
// Modules
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import Animated, {
  multiply,
  divide,
  Extrapolate,
  interpolate,
} from 'react-native-reanimated';
import {
  interpolateColor,
  useScrollHandler,
} from 'react-native-redash/lib/module/v1';
// Components
import Slide, {SLIDE_HEIGHT} from './Slide';
import Dot from './Dot';
import Subslide from './Subslide';
import {theme} from '../../components';
import {Routes, StackNavigationProps} from '../../components/Navigation';
// Contracts
const {width} = Dimensions.get('window');
const slides = [
  {
    title: 'Relaxed',
    color: '#BFEAF5',
    subtitle: 'Find Your Outfits',
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    picture: {
      src: require('../assets/1.png'),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: 'Playful',
    color: '#BEECC4',
    subtitle: 'Hear it Fearst, Wear it First',
    description:
      'Hating tj-he clothes in your wordrobe? Explore hundreds of outfit ideas',
    picture: {
      src: require('../assets/2.png'),
      width: 2791,
      height: 3744,
    },
  },
  {
    title: 'Exentric',
    color: '#FFE4D9',
    subtitle: 'Your Style, Your Way',
    description:
      'Create yor in teh vidual & uniqu style and look amazing everyday',
    picture: {
      src: require('../assets/3.png'),
      width: 2738,
      height: 3244,
    },
  },
  {
    title: 'Funky',
    color: '#FFDDDD',
    subtitle: 'Look Food, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    picture: {
      src: require('../assets/4.png'),
      width: 1757,
      height: 2551,
    },
  },
];
export const assets = slides.map((slide) => slide.picture.src);
// Onboarding
const Onboarding = ({
  navigation,
}: StackNavigationProps<Routes, 'Onboarding'>) => {
  const scroll = React.useRef<Animated.ScrollView>(null);
  const {scrollHandler, x} = useScrollHandler();

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        {slides.map(({picture}, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View key={index} style={[styles.underlay, {opacity}]}>
              <Image
                source={picture.src}
                style={{
                  width: width - theme.borderRadii.xl,
                  height:
                    ((width - theme.borderRadii.xl) * picture.height) /
                    picture.width,
                }}
              />
            </Animated.View>
          );
        })}
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          bounces={false}
          {...scrollHandler}
          ref={scroll}>
          {slides.map(({title, picture}, index) => (
            <Slide key={index} right={!!(index % 2)} {...{title, picture}} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{...StyleSheet.absoluteFillObject, backgroundColor}}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{index}} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: width * slides.length,
              transform: [{translateX: multiply(x, -1)}],
            }}>
            {slides.map(({subtitle, description}, index) => {
              const last = slides.length - 1 === index;
              return (
                <Subslide
                  key={index}
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Welcome');
                    } else {
                      scroll.current
                        ?.getNode()
                        .scrollTo({x: width * (index + 1), animated: true});
                    }
                  }}
                  {...{subtitle, description, last}}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: 'hidden',
  },
  footer: {flex: 1},
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Onboarding;
