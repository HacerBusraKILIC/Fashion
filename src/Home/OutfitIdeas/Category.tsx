import React, {useState} from 'react';
// Modules
import {StyleSheet, View} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {Box, Text} from '../../components/Theme';
// Constants
const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;
// Interface
interface CategoryProps {
  category: {id: string; color: string; title: string};
}
// Category
const Category = ({
  category: {color: backgroundColor, id, title},
}: CategoryProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <BorderlessButton
      rippleColor="white"
      onPress={() => setSelected((prev) => !prev)}>
      <Box marginLeft="m" alignItems="center" marginTop="s">
        <Box
          width={OUTER_RADIUS * 2}
          height={OUTER_RADIUS * 2}
          justifyContent="center"
          alignItems="center">
          {selected && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: OUTER_RADIUS,
                borderColor: backgroundColor,
                borderWidth: 1,
              }}
            />
          )}
          <View
            style={{
              width: INNER_RADIUS * 2,
              height: INNER_RADIUS * 2,
              borderRadius: INNER_RADIUS,
              backgroundColor,
            }}
          />
        </Box>
        <Text textAlign="center" marginTop="s">
          {title}
        </Text>
      </Box>
    </BorderlessButton>
  );
};
export default Category;
