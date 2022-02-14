import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import {AuthContext} from '../context/AuthContext';
import {useForm, Controller} from 'react-hook-form';

function AuthForm() {
  const {handleRegister, handleLogin, toggleRegister, errMessage} =
    useContext(AuthContext);
  const [focus, setFocus] = useState('');
  const focusedBorderStyle = {
    borderWidth: 2,
    borderColor: '#000',
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async data => {
    const {email, password} = data;
    if (toggleRegister) {
      await handleLogin(email, password);
    } else {
      await handleRegister(email, password);
    }
  };

  return (
    <Container>
      <Logo
        // eslint-disable-next-line
        source={require('../assets/images/Logo.png')}
      />
      <Controller
        control={control}
        rules={{
          maxLength: 20,
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={focus === 'email' ? focusedBorderStyle : null}
            onFocus={() => setFocus('email')}
          />
        )}
        name="email"
      />
      {errors.email && <Error>Please enter valid email</Error>}
      <Controller
        control={control}
        rules={{
          maxLength: 20,
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={focus === 'password' ? focusedBorderStyle : null}
            onFocus={() => setFocus('password')}
          />
        )}
        name="password"
      />
      {errors.email && <Error>Please enter valid password</Error>}
      {errMessage.length > 0 && <Error>{errMessage}</Error>}
      <Text>Forgot password?</Text>
      <ButtonContainer onPress={handleSubmit(onSubmit)}>
        <ButtonText> {toggleRegister ? 'Login' : 'Register'} </ButtonText>
      </ButtonContainer>
    </Container>
  );
}

export default AuthForm;

const Container = styled.View`
  width: 90%;
  align-self: center;
  margin-top: 50px;
`;

const Logo = styled.Image`
  width: 180px;
  height: 80px;
  align-self: center;
  margin-bottom: 50px;
`;

const TextInput = styled.TextInput`
  width: 100%;
  height: 55px;
  border: 1px solid gray;
  margin-bottom: 20px;
  padding: 0 20px;
  border-radius: 5px;
  font-size: 16px;
  font-family: 'Poppins-Regular';
  color: #000;
`;

const Text = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-Regular';
  color: blue;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: #000;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: Podkova-Bold;
`;

const Error = styled.Text`
  color: red;
  font-size: 12px;
  font-family: Poppins-Regular;
  margin-bottom: 6px;
`;
