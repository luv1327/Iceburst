import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';

export default function ShippingDetails({navigation}) {
  return (
    <View>
      <Text>Personal Details</Text>
      <TextInput placeholder="First Name" />
      <TextInput placeholder="Last Name" />
      <TextInput placeholder="Mobile Number" />
      <Text>Shipping Adress</Text>
      <TextInput placeholder="First Name" />
      <TextInput placeholder="Last Name" />
      <TextInput placeholder="Mobile Number" />
      <Button
        title="Checkout"
        onPress={() => navigation.navigate('OrderSummary')}
      />
    </View>
  );
}
