import React, {useRef, useState} from 'react';
// Modules
import {Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Box, Header, useTheme} from '../../components';
import {HomeNavigationProps} from '../../components/Navigation';
import {
  Transitioning,
  Transition,
  TransitioningView,
} from 'react-native-reanimated';
// Components
import Outfit from './Outfit';
import Footer from './Footer';
import TopCurve from './TopCurve';
// Constants
const {width: wWidth} = Dimensions.get('window');
const defaultOutfits = [
  {
    id: 1,
    color: '#BFEAF5',
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 2,
    color: '#BEECC4',
    aspectRatio: 200 / 145,
    selected: false,
  },
  {
    id: 3,
    color: '#D5C3BB',
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 4,
    color: '#FFDDDD',
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 5,
    color: '#BFEAF5',
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 6,
    color: '#F3F0EF',
    aspectRatio: 120 / 145,
    selected: false,
  },
  {
    id: 7,
    color: '#D5C3BB',
    aspectRatio: 210 / 145,
    selected: false,
  },
  {
    id: 8,
    color: '#DEEFC4',
    aspectRatio: 160 / 145,
    selected: false,
  },
];
// FavoritesOutfits
const FavoritesOutfits = ({
  navigation,
}: HomeNavigationProps<'FavoritesOutfits'>) => {
  const theme = useTheme();
  const width = (wWidth - theme.spacing.m * 3) / 2;
  const transition = (
    <Transition.Together>
      <Transition.Change interpolation="easeInOut" durationMs={1000} />
    </Transition.Together>
  );
  const list = useRef<TransitioningView>(null);
  // State
  const [footerHeight, setFooterHeight] = useState(0);
  const [outfits, setOutfits] = useState(defaultOutfits);
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Outfit Ideas"
        left={{icon: 'menu', onPress: () => navigation.openDrawer()}}
        right={{icon: 'cart', onPress: () => true}}
      />
      <Box flex={1}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.m,
            paddingBottom: footerHeight,
          }}>
          <Transitioning.View ref={list} {...{transition}}>
            <Box flexDirection="row">
              <Box marginRight="m">
                {outfits
                  .filter(({id}) => id % 2 !== 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} outfit={outfit} width={width} />
                  ))}
              </Box>
              <Box>
                {outfits
                  .filter(({id}) => id % 2 === 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} outfit={outfit} width={width} />
                  ))}
              </Box>
            </Box>
          </Transitioning.View>
        </ScrollView>
      </Box>
      <TopCurve footerHeight={footerHeight} />
      <Box
        position="absolute"
        bottom={0}
        right={0}
        left={0}
        onLayout={({
          nativeEvent: {
            layout: {height},
          },
        }) => setFooterHeight(height)}>
        <Footer
          onPress={() => {
            list.current?.animateNextTransition();
            setOutfits(outfits.filter((outfit) => !outfit.selected));
          }}
          label="Add to Favorites"
        />
      </Box>
    </Box>
  );
};
export default FavoritesOutfits;
