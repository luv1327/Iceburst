import React from 'react';
import {Image} from 'react-native';

export default function LogoTitle() {
  return (
    <Image
      style={{width: 120, height: 50, marginBottom: 10}}
      /*eslint-disable*/
      source={require('../assets/images/Logo.png')}
    />
  );
}
