import React, {useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import Products from '../components/Products';

export default function Home({navigation}) {
  const {handleLogout, firestoreUser} = useContext(AuthContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'white',
      }}>
      <Text> Home </Text>
      <Products navigation={navigation} />
      <Text> {firestoreUser?.email} </Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text> Logout </Text>
      </TouchableOpacity>
    </View>
  );
}
