import React, {useContext} from 'react';
import {ActivityIndicator, View, FlatList} from 'react-native';
import {ProductContext} from '../context/ProductContext';
import ProductItemCart from '../components/ProductItemCart';
import EmptyCart from '../components/EmptyCart';
import CartFooter from '../components/CartFooter';
import styled from 'styled-components';
import DeliveryMessage from '../components/DeliveryMessage';

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
    <View style={{flex: 1}}>
      {cart.length > 0 ? (
        <Container>
          <View style={{marginBottom: 15}}>
            <DeliveryMessage message="Order 5 Or Above Trays For Free Delivery" />
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={cart}
            renderItem={({item}) => (
              <ProductItemCart item={item} navigation={navigation} />
            )}
            keyExtractor={item => item.id}
            ListFooterComponent={<CartFooter totalQuantity={totalQuantity} />}
          />
        </Container>
      ) : (
        <EmptyCart
          navigation={navigation}
          message={{
            message: `Cart is empty`,
            subMessage: 'Add Something To Make Me Happy',
          }}
        />
      )}
      {cart.length > 0 && (
        <ButtonContainer onPress={handleContinueAndNavigate}>
          <ButtonText>Countinue</ButtonText>
        </ButtonContainer>
      )}
    </View>
  );
}

const Container = styled.View``;

const ButtonContainer = styled.TouchableOpacity`
  position: absolute;
  left: 0px;
  right: 0px
  bottom: 0px
  background-color: #000;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: Podkova-Bold;
`;
