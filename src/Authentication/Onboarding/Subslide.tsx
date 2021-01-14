import * as React from 'react';
import {View, StyleSheet} from 'react-native';
//  Components
import {Button, Text} from '../../components';
// interface
interface SubslideProps {
  key: number;
  subtitle: String;
  description: String;
  last: boolean;
  onPress: () => void;
}
// Subslide
const Slide = ({subtitle, description, last, onPress}: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text variant="title2" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{onPress}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    textAlign: 'center',
    marginBottom: 40,
  },
});
export default Slide;
