import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Login from '../screens/Login';
import Register from '../screens/Register';

export default function Auth() {
  const [toggleRegister, setToggleRegister] = useState(true);
  return (
    <View>
      {toggleRegister ? <Login /> : <Register />}
      <TouchableOpacity
        onPress={() => setToggleRegister(prevState => !prevState)}>
        <Text> {toggleRegister ? 'Register' : 'Login'} </Text>
      </TouchableOpacity>
    </View>
  );
}
