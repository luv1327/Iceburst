import React, {useContext} from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import styled from 'styled-components';

export default function Register() {
  const {setEmail, setPassword, handleRegister} = useContext(AuthContext);
  return (
    <Container>
      <TextInput placeholder="Email" onChangeText={email => setEmail(email)} />
      <TextInput
        placeholder="Password"
        onChangeText={password => setPassword(password)}
      />
      <TouchableOpacity onPress={handleRegister}>
        <Text>Register</Text>
      </TouchableOpacity>
    </Container>
  );
}

const Container = styled.View`
  background-color: red;
  height: 100%;
  width: 100%;
`;
