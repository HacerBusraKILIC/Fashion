import React, {useRef} from 'react';
// Modules
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {TextInput as RNTextInput} from 'react-native';
// Components
import Container from '../components/Container';
import {Button, Text} from '../components';
import {Box} from '../components/Theme';
import TextInput from '../components/Form/TextInput';
import Footer from './components/Footer';
import {AuthNavigationProps} from '../components/Navigation';

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref('password')], "Passwords don't match")
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
// Login
const SignUp = ({navigation}: AuthNavigationProps<'SignUp'>) => {
  const footer = (
    <Footer
      title="Already have an account?"
      action="  Login Here"
      onPress={() => navigation.navigate('Login')}
    />
  );
  const {handleChange, handleBlur, handleSubmit, errors, touched} = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
      remember: true,
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => console.log(values),
  });
  const password = useRef<RNTextInput>(null);
  const passwordConfirmation = useRef<RNTextInput>(null);
  return (
    <Container pattern={1} {...{footer}}>
      <Text variant="title1" textAlign="center" marginBottom="l">
        Create Account
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Let's us know what your name, email and your password
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
        <Box marginBottom="m">
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
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => password.current?.focus()}
            secureTextEntry
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            ref={passwordConfirmation}
            icon="lock-closed-outline"
            placeholder="Confirm your Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('passwordConfirmation')}
            errors={errors.passwordConfirmation}
            touched={touched.passwordConfirmation}
            autoCompleteType="password"
            autoCapitalize="none"
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
            secureTextEntry
          />
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            onPress={handleSubmit}
            label="Create your account"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
