import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import OrderSummaryItems from '../components/OrderSummaryItems';
import styled from 'styled-components';
import EmptyCart from '../components/EmptyCart';

function MyOrders({navigation}) {
  const {firestoreUser} = useContext(AuthContext);
  console.log(firestoreUser);
  return (
    <Container>
      {/* <Pressable onPress={handleLogout}>
        <Text>Logout</Text>
      </Pressable> */}
      {firestoreUser.currentOrder ? (
        <OrderSummaryItemsContainer style={{flex: 1}}>
          <Title>On The Way</Title>
          <View>
            <FlatList
              data={firestoreUser.currentOrder.order}
              renderItem={({item}) => <OrderSummaryItems item={item} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </OrderSummaryItemsContainer>
      ) : (
        <EmptyCart
          navigation={navigation}
          message={{
            message: `You Have Not Placed Any Order`,
            subMessage:
              'Order Something To Enjoy Refreshing Drink , How About A Tropical?',
          }}
        />
      )}
    </Container>
  );
}

export default MyOrders;

const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: #fff;
`;

const OrderSummaryItemsContainer = styled.View`
  margin-top: 20px;
  width: 90%;
  align-self: center;
`;

const Title = styled.Text`
  font-size: 18px;
  font-family: Poppins-Bold;
  margin-bottom: 5px;
  color: #000;
`;

const View = styled.View`
  border: 1px solid lightgray;
  border-radius: 5px;
  elevation: 1;
  padding-bottom: 10px;
  margin-bottom: 100px;
  padding-top: 15px;
`;
