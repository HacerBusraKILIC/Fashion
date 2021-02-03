import React from 'react';
import {BorderlessButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
// Modules
import {Box, Text} from '../Theme';
// Components
// Interface
interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}
// CheckBox
const CheckBox = ({label, onChange, checked}: CheckBoxProps) => {
  return (
    <BorderlessButton
      onPress={() => onChange()}
      style={{justifyContent: 'center'}}>
      <Box flexDirection="row">
        <Box
          width={20}
          height={20}
          marginRight="m"
          borderRadius="s"
          alignItems="center"
          justifyContent="center"
          borderWidth={1}
          borderColor="primary"
          backgroundColor={checked === true ? 'primary' : 'white'}>
          <Icon name="checkmark-outline" color="white" size={12} />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </BorderlessButton>
  );
};

export default CheckBox;
