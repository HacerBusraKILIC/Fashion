import React, {useState} from 'react';
import {interpolate, sub} from 'react-native-reanimated';
// Modules
import {useTransition} from 'react-native-redash/lib/module/v1';
import _ from 'lodash';
// Components
import {Box, Header} from '../../components';
import {HomeNavigationProps} from '../../components/Navigation';
import Background from './Background';
import Card from './Card';
import Categories from './Categories';
// Constants
const cards = [
  {index: 3, source: require('../../Authentication/assets/4.png')},
  {index: 2, source: require('../../Authentication/assets/3.png')},
  {index: 1, source: require('../../Authentication/assets/2.png')},
  {index: 0, source: require('../../Authentication/assets/1.png')},
];
const step = 1 / (cards.length - 1);
// OutfitIdeas
const OutfitIdeas = ({navigation}: HomeNavigationProps<'OutfitIdeas'>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTransition(currentIndex);
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Outfit Ideas"
        left={{icon: 'menu', onPress: () => navigation.openDrawer()}}
        right={{icon: 'cart', onPress: () => true}}
      />
      <Categories />
      <Box flex={1}>
        <Background />
        {cards.map(
          ({index, source}) =>
            currentIndex < index * step + step && (
              <Card
                key={index}
                position={sub(index * step, aIndex)}
                onSwipe={() => setCurrentIndex((prev) => prev + step)}
                {...{source, step}}
              />
            ),
        )}
      </Box>
    </Box>
  );
};
export default OutfitIdeas;
