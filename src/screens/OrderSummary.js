import React, {useContext} from 'react';
import {View, Text, Alert, Button} from 'react-native';
import {ProductContext} from '../context/ProductContext';

export default function OrderSummary() {
  const {cart} = useContext(ProductContext);
  console.log(cart);
  return (
    <View>
      <Text>Order Summary</Text>
      <Button
        title="Make Payment"
        onPress={() => Alert.alert('Payment Modal')}
      />
    </View>
  );
}
