import * as React from 'react';
// Modules
import {StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
// Theme Modules
import {Theme, Text} from './Theme';
import {useTheme} from '@shopify/restyle';

// interface
interface ButtonProps {
  variant: 'default' | 'primary' | 'transparent';
  label?: String;
  onPress: () => void;
  children?: React.ReactNode;
}
// Button
const Button = ({variant, label, onPress, children}: ButtonProps) => {
  // Theme
  const theme = useTheme<Theme>();
  //
  const backgroundColor =
    variant === 'primary'
      ? theme.colors.primary
      : variant === 'transparent'
      ? 'transparent'
      : theme.colors.grey;
  const color =
    variant === 'primary' ? theme.colors.white : theme.colors.secondary;

  return (
    <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
      {children ? (
        children
      ) : (
        <Text variant="button" style={{color}}>
          {label}
        </Text>
      )}
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
