import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {ProductContext} from '../context/ProductContext';

export default function ProductItemCart({navigation, item}) {
  const {name, id, quantity} = item;
  const {handleAddingQuantity, handleRemoveQuantity, handleRemoveCart} =
    useContext(ProductContext);

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
        <Text>ID: {id}</Text>
        <Text>Name: {name}</Text>
        <Text> {quantity} </Text>
      </TouchableOpacity>
      <Button title="Increase" onPress={() => handleAddingQuantity(id)} />
      <Button title="Decrase" onPress={() => handleRemoveQuantity(id)} />
      <Button title="Remove" onPress={() => handleRemoveCart(item)} />
    </View>
  );
}
