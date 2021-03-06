import {createBox, createText, useTheme as useReTheme} from '@shopify/restyle';
import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export const theme = {
  colors: {
    primary: '#2CB9B0',
    primaryLight: '#E7F9F7',
    secondary: '#0C0D34',
    danger: '#FF0058',
    title: '#0C0D34',
    text: 'rgba(12,12,52,0.7)',
    white: 'white',
    grey: '#F4F0EF',
    lightGrey: '#FAFAFA',
    darkGrey: '#808080',
    pink: '#ff69b4',
    orange: '#FE5E33',
    yellow: '#ffd800',
    violet: '#8a2be2',
    lightBlue: '#BFEAF5',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      fontWeight: '700',
      color: 'white',
      textAlign: 'center',
      lineHeight: 80,
    },
    title1: {
      fontSize: 28,
      color: 'secondary',
      fontWeight: '700',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      color: 'secondary',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'text',
    },
    button: {
      fontSize: 15,
      color: 'text',
    },
    header: {
      fontSize: 12,
      fontWeight: 'bold',
      lineHeight: 24,
      color: 'secondary',
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();
type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};
export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T,
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
//export default theme;
