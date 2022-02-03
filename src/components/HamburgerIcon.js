import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function HamburgerIcon({navigation}) {
  return (
    <TouchableOpacity
      style={{marginLeft: 15}}
      onPress={() => navigation.toggleDrawer()}>
      <Icon name="menu" size={20} color="black" />
    </TouchableOpacity>
  );
}
