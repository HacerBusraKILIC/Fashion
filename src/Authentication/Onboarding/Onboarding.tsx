import * as React from 'react';
// Modules
import {View, StyleSheet, Dimensions} from 'react-native';
import Animated, {multiply, divide} from 'react-native-reanimated';
import {
  interpolateColor,
  useScrollHandler,
} from 'react-native-redash/lib/module/v1';
// Components
import Slide, {SLIDE_HEIGHT, BORDER_RADIUS} from './Slide';
import Dot from './Dot';
import Subslide from './Subslide';
// Contracts
const {width} = Dimensions.get('window');
const slides = [
  {
    title: 'Relaxed',
    color: '#BFEAF5',
    subtitle: 'Find Your Outfits',
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    picture: require('./assets/1.png'),
  },
  {
    title: 'Playful',
    color: '#BEECC4',
    subtitle: 'Hear it Fearst, Wear it First',
    description:
      'Hating tj-he clothes in your wordrobe? Explore hundreds of outfit ideas',
    picture: require('./assets/2.png'),
  },
  {
    title: 'Exentric',
    color: '#FFE4D9',
    subtitle: 'Your Style, Your Way',
    description:
      'Create yor in teh vidual & uniqu style and look amazing everyday',
    picture: require('./assets/3.png'),
  },
  {
    title: 'Funky',
    color: '#FFDDDD',
    subtitle: 'Look Food, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    picture: require('./assets/4.png'),
  },
];

const Onboarding = () => {
  const scroll = React.useRef<Animated.ScrollView>(null);
  const {scrollHandler, x} = useScrollHandler();

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
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
            {slides.map(({subtitle, description}, index) => (
              <Subslide
                key={index}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current
                      .getNode()
                      .scrollTo({x: width * (index + 1), animated: true});
                  }
                }}
                last={slides.length - 1 === index}
                {...{subtitle, description}}
              />
            ))}
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
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {flex: 1},
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Onboarding;
