import React, {forwardRef} from 'react';
// Modules
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RoundedIcon from '../RoundedIcon';
import {Box, useTheme} from '../Theme';
// Interface
interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  errors?: string;
}
// TextInput
const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({icon, touched, errors, ...props}, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2.5;
    const reColor = !touched ? 'text' : errors ? 'danger' : 'primary';
    const color = theme.colors[reColor];
    return (
      <Box
        flexDirection="row"
        height={48}
        alignItems="center"
        borderRadius="s"
        borderWidth={StyleSheet.hairlineWidth}
        borderColor={reColor}>
        <Box padding="s">
          <Icon name={icon} size={16} {...{color}} />
        </Box>
        <Box flex={1}>
          <RNTextInput
            underlineColorAndroid="transparent"
            placeholderTextColor={color}
            {...{ref}}
            {...props}
          />
        </Box>

        {touched && (
          <RoundedIcon
            name={!errors ? 'checkmark-outline' : 'close-outline'}
            backgroundColor={!errors ? 'primary' : 'danger'}
            color="white"
            size={SIZE}
          />
        )}
      </Box>
    );
  },
);

export default TextInput;

/*import React, {useState} from 'react';
// Modules
import {
  Alert,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import theme, {Box} from '../Theme';
// Components
// Interface
interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: string;
  validator: (input: string) => boolean;
}
const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;
// TextInput
const TextInput = ({icon, validator, ...props}: TextInputProps) => {
  const [state, setState] = useState<InputState>(Pristine);
  const [input, setInput] = useState('');
  const reColor: keyof typeof theme.colors =
    state === Pristine ? 'text' : state === Valid ? 'primary' : 'danger';
  const color = theme.colors[reColor];
  const onChangeText = (text: string) => {
    setInput(text);
    if (state === Pristine) {
      validate();
    }
  };
  const validate = () => {
    const valid = validator(input);
    setState(valid);
  };
  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}>
      <Box padding="s">
        <Icon name={icon} size={16} {...{color}} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          onBlur={validate}
          {...{onChangeText}}
          {...props}
        />
      </Box>

      {(state === Valid || state === Invalid) && (
        <Box
          borderRadius="l"
          margin="s"
          height={SIZE}
          width={SIZE}
          justifyContent="center"
          alignItems="center"
          backgroundColor={state === Valid ? 'primary' : 'danger'}>
          <Icon
            name={state === Valid ? 'checkmark-outline' : 'close-outline'}
            color="white"
            size={12}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
*/
