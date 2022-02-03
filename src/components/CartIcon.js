import React, {useContext} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ProductContext} from '../context/ProductContext';

export default function CartIcon({navigation}) {
  const {cart} = useContext(ProductContext);
  return (
    <TouchableOpacity
      style={{marginRight: 15}}
      onPress={() => navigation.navigate('Cart')}>
      {cart.length > 0 ? (
        <View style={styles.badge}></View>
      ) : (
        <Icon name="shopping-cart" size={20} color="black" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  badge: {
    height: 8,
    width: 8,
    backgroundColor: 'tomato',
    borderRadius: 50,
    alignSelf: 'flex-end',
  },
});
