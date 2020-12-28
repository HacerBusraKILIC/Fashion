import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
// interface
interface ButtonProps {
  variant: 'default' | 'primary';
  label: String;
  onPress: () => void;
}
// Button
const Button = ({variant, label, onPress}: ButtonProps) => {
  const backgroundColor =
    variant === 'primary' ? '#2CB9B0' : 'rgba(12, 13, 52, 0.05)';
  const color = variant === 'primary' ? 'white' : '#0C0D34';
  return (
    <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
      <Text style={[styles.label, {color}]}>{label}</Text>
    </RectButton>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    textAlign: 'center',
  },
});

Button.defaultProps = {variant: 'default'};
export default Button;
