import React, {useContext} from 'react';
import {ActivityIndicator, View, FlatList, Button, Text} from 'react-native';
import {ProductContext} from '../context/ProductContext';
import ProductItemCart from '../components/ProductItemCart';

export default function Cart({navigation}) {
  const {cart, loading, handleContinue, totalQuantity} =
    useContext(ProductContext);

  const handleContinueAndNavigate = () => {
    handleContinue();
    navigation.navigate('ShippingDetails');
  };
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={cart}
        renderItem={({item}) => (
          <ProductItemCart item={item} navigation={navigation} />
        )}
      />
      <Button title="Continue" onPress={handleContinueAndNavigate} />
      <Text>{totalQuantity()}</Text>
    </View>
  );
}
