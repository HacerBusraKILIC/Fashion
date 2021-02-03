import * as React from 'react';
// Modules
import {StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
// Theme Modules
import {Theme, Text} from './Theme';
import {useTheme} from '@shopify/restyle';

// interface
interface ButtonProps {
  variant: 'default' | 'primary';
  label?: String;
  onPress: () => void;
}
// Button
const Button = ({variant, label, onPress}: ButtonProps) => {
  // Theme
  const theme = useTheme<Theme>();
  //
  const backgroundColor =
    variant === 'primary' ? theme.colors.primary : theme.colors.grey;
  const color =
    variant === 'primary' ? theme.colors.white : theme.colors.secondary;

  return (
    <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
      <Text variant="button" style={{color}}>
        {label}
      </Text>
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
});

Button.defaultProps = {variant: 'default'};
export default Button;
