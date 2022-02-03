import React, {useContext} from 'react';
import Auth from './Auth';
import {AuthContext} from '../context/AuthContext';
import MyDrawer from './MyDrawer';

export default function Main() {
  const {user, initializing} = useContext(AuthContext);
  if (initializing) return null;
  if (user) {
    return <MyDrawer />;
  }
  return <Auth />;
}
