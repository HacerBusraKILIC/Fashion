import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from '../../components';
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
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
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
    fontSize: 24,
    color: '#0C0D34',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#0C0D34',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
});
export default Slide;
