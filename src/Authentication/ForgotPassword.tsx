import * as React from 'react';
// Modules
import {Linking, StyleSheet} from 'react-native';
// Modules
import {useFormik} from 'formik';
import * as Yup from 'yup';
// Components
import Footer from './components/Footer';
import TextInput from '../components/Form/TextInput';
import {Box, Button, Container, Text} from '../components';
import {Routes, StackNavigationProps} from '../components/Navigation';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});
// ForgotPassword
const ForgotPassword = ({
  navigation,
}: StackNavigationProps<Routes, 'ForgotPassword'>) => {
  const {handleChange, handleBlur, handleSubmit, errors, touched} = useFormik({
    initialValues: {email: ''},
    validationSchema: ForgotPasswordSchema,
    onSubmit: () => navigation.navigate('PasswordChanged'),
  });
  const footer = (
    <Footer
      title="Don't work?"
      action="Try another way"
      onPress={() => Linking.openURL('mailto:help@support.com')}
    />
  );
  return (
    <Container pattern={2} {...{footer}}>
      <Box padding="xl" alignSelf="center">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Forgot password?
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter the email address associated with your account
        </Text>

        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail-outline"
              placeholder="Enter your EMail"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              errors={errors.email}
              touched={touched.email}
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => handleSubmit()}
            />
            <Box alignItems="center" marginTop="m">
              <Button
                variant="primary"
                onPress={handleSubmit}
                label="Reset password"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
const styles = StyleSheet.create({});

export default ForgotPassword;
