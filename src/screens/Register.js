import React, {useContext} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export default function Register() {
  const {setEmail, setPassword, handleRegister} = useContext(AuthContext);
  return (
    <View>
      <TextInput placeholder="Email" onChangeText={email => setEmail(email)} />
      <TextInput
        placeholder="Password"
        onChangeText={password => setPassword(password)}
      />
      <TouchableOpacity onPress={handleRegister}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
