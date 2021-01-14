import * as React from 'react';
// Modules
import {Alert} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
// Components
import Container from '../../components/Container';
import SocialLogin from '../components/SocialLogin';
import {Button, Text} from '../../components';
import {Box} from '../../components/Theme';
import TextInput from '../../components/Form/TextInput';
import CheckBox from '../../components/Form/CheckBox';

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
// Login
const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => Alert.alert('Sign Up!')}>
          <Box flexDirection="row">
            <Text variant="button" color="white">
              Don't hava an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign Up Here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return (
    <Container {...{footer}}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Formik
          initialValues={{email: '', password: '', remember: true}}
          validationSchema={LoginSchema}
          onSubmit={(values) => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <Box>
              <Box marginBottom="m">
                <TextInput
                  icon="mail-outline"
                  placeholder="Enter your EMail"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  errors={errors.email}
                  touched={touched.email}
                />
              </Box>
              <TextInput
                icon="lock-closed-outline"
                placeholder="Enter your Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                errors={errors.password}
                touched={touched.password}
              />
              <Box flexDirection="row" justifyContent="space-between">
                <CheckBox
                  label="Remember Me"
                  checked={values.remember}
                  onChange={() => setFieldValue('remember', !values.remember)}
                />
                <Button variant="transparent">
                  <Text color="primary">Forgot Password</Text>
                </Button>
              </Box>
              <Box alignItems="center" marginTop="m">
                <Button
                  variant="primary"
                  onPress={handleSubmit}
                  label="Log into your account"
                />
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
