import React, {useRef} from 'react';
// Modules
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {TextInput as RNTextInput} from 'react-native';
import {Routes, StackNavigationProps} from '../components/Navigation';
import {BorderlessButton} from 'react-native-gesture-handler';
// Components
import Container from '../components/Container';
import {Button, Text} from '../components';
import {Box} from '../components/Theme';
import TextInput from '../components/Form/TextInput';
import CheckBox from '../components/Form/CheckBox';
import Footer from './components/Footer';

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
// Login
const Login = ({navigation}: StackNavigationProps<Routes, 'Login'>) => {
  const footer = (
    <Footer
      title="  Don't hava an account?"
      action="  Sign Up Here"
      onPress={() => navigation.navigate('SignUp')}
    />
  );
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {email: '', password: '', remember: true},
    validationSchema: LoginSchema,
    onSubmit: () => navigation.navigate('Home'),
  });
  const password = useRef<RNTextInput>(null);
  return (
    <Container pattern={0} {...{footer}}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
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
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>
          <TextInput
            ref={password}
            icon="lock-closed-outline"
            placeholder="Enter your Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            errors={errors.password}
            touched={touched.password}
            autoCompleteType="password"
            autoCapitalize="none"
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
            secureTextEntry
          />
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginVertical="s">
            <CheckBox
              label="Remember Me"
              checked={values.remember}
              onChange={() => setFieldValue('remember', !values.remember)}
            />
            <BorderlessButton
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text variant="button" color="primary">
                Forgot Password
              </Text>
            </BorderlessButton>
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Log into your account"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
