import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {ProductContext} from '../context/ProductContext';

const Details = ({route, navigation}) => {
  const {handleAddCart, isAlreadyInCart} = useContext(ProductContext);
  const {name, id} = route.params;
  const item = route.params;

  return (
    <View>
      <Text> {name} </Text>
      <Text> {id} </Text>
      {isAlreadyInCart(id) ? (
        <Button
          title="Go to cart"
          onPress={() => navigation.navigate('Cart')}
        />
      ) : (
        <Button title="Add to Cart" onPress={() => handleAddCart(item)} />
      )}
    </View>
  );
};

export default Details;
