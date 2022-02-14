import React, {useContext} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {ProductContext} from '../context/ProductContext';
import styled from 'styled-components';

export default function CartIcon({navigation}) {
  const {cart} = useContext(ProductContext);
  return (
    <CartContainer onPress={() => navigation.navigate('Cart')}>
      {cart.length > 0 ? (
        <View style={styles.cartIcon}>
          <View style={styles.badge}>
            <Text style={styles.cartLength}> {cart.length}</Text>
          </View>
          <Image
            style={{height: 25, width: 25}}
            //eslint-disable-next-line
            source={require('../assets/images/bag.png')}
          />
        </View>
      ) : (
        <Image
          style={{height: 25, width: 25}}
          //eslint-disable-next-line
          source={require('../assets/images/bag.png')}
        />
      )}
    </CartContainer>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#000',
    width: 15,
    height: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartLength: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
});

const CartContainer = styled.TouchableOpacity`
  margin-right: 15px;
`;
