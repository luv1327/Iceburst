import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyStack from './MyStack';
import About from '../screens/About';
import Features from '../screens/Features';
import Collabs from '../screens/Collabs';
import Reach from '../screens/Reach';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'front',
        }}>
        <Drawer.Screen
          options={{headerShown: false}}
          name="Home"
          component={MyStack}
        />
        <Drawer.Screen name="About Us" component={About} />
        <Drawer.Screen name="Features" component={Features} />
        <Drawer.Screen name="Collabs" component={Collabs} />
        <Drawer.Screen name="Reach Us" component={Reach} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
