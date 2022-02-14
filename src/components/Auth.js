import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import AuthForm from '../components/AuthForm';
import styled from 'styled-components';
import {AuthContext} from '../context/AuthContext';

export default function Auth() {
  const {toggleRegister, setToggleRegister} = useContext(AuthContext);
  return (
    <Container>
      <AuthForm toggleRegister={toggleRegister} />
      <ToggleContainer>
        <Text>
          {toggleRegister
            ? `Don't have an account?`
            : 'Already have an account?'}
        </Text>
        <TouchableOpacity
          onPress={() => setToggleRegister(prevState => !prevState)}>
          <LoginText> {toggleRegister ? 'Register' : 'Login'} </LoginText>
        </TouchableOpacity>
      </ToggleContainer>
    </Container>
  );
}

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const ToggleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  align-self: center;
`;

const Text = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  margin-right: 5px;
`;

const LoginText = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-Bold';
  color: blue;
  border-bottom-width: 1px;
  border-bottom-color: blue;
`;
