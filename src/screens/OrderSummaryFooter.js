import React from 'react';
import styled from 'styled-components';

function OrderSummaryFooter({totalQuantity, navigation}) {
  return (
    <Container>
      <ChangeContainer onPress={() => navigation.navigate('Cart')}>
        <ChangeButton>Change</ChangeButton>
      </ChangeContainer>
      <PriceContainer>
        <Price> Total </Price>
        <Price>Rs. {totalQuantity() * 199} </Price>
      </PriceContainer>
    </Container>
  );
}

export default OrderSummaryFooter;

const Container = styled.View`
  width: 100%;
  height: 80px;
`;

const ChangeContainer = styled.TouchableOpacity`
  width: 44px;
  margin-left: 15px;
`;

const ChangeButton = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-Regular';
  color: #000;
  border-bottom-width: 1px;
  border-bottom-color: blue;
  color: blue;
`;

const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  border-top-width: 1px;
  border-top-color: lightgray;
  align-self: center;
  width: 90%;
`;

const Price = styled.Text`
  font-size: 18px;
  font-family: Podkova-Bold;
  color: #000;
  margin-top: 10px;
`;
