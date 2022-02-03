import 'react-native-gesture-handler';
import React from 'react';
import Main from './src/components/Main';
import {AuthProvider} from './src/context/AuthContext';
import {ProductProvider} from './src/context/ProductContext';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  `[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!`,
]);

export default function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Main />
      </ProductProvider>
    </AuthProvider>
  );
}
