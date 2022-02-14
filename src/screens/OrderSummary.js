import React, {useEffect, useContext} from 'react';
import axios from 'axios';
import {FlatList} from 'react-native';
import {ProductContext} from '../context/ProductContext';
import PaymentButton from '../components/PaymentButton';
import ShippingInformation from '../components/ShippingInformation';
import OrderSummaryItems from '../components/OrderSummaryItems';
import OrderSummaryFooter from './OrderSummaryFooter';
import styled from 'styled-components';

export default function OrderSummary({navigation}) {
  const {totalQuantity, setOrderData, cart} = useContext(ProductContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://10.0.2.2:3000/order', {
          amount: totalQuantity() * 199,
        });
        setOrderData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      <OrderSummaryItemsContainer style={{flex: 1}}>
        <Title>Order Summary</Title>
        <View>
          <FlatList
            data={cart}
            renderItem={({item}) => (
              <OrderSummaryItems item={item} navigation={navigation} />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <ShippingInformation navigation={navigation} />
            }
            ListFooterComponent={
              <OrderSummaryFooter
                navigation={navigation}
                totalQuantity={totalQuantity}
              />
            }
          />
        </View>
      </OrderSummaryItemsContainer>
      <PaymentButton navigation={navigation} />
    </Container>
  );
}

const Container = styled.View`
  height: 100%;
  width: 100%;
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
`;
