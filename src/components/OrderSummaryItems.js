import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';

function OrderSummaryItems({item}) {
  const {name, posterFrontImage, quantity} = item;
  return (
    <Container>
      <Image style={{height: 50, width: 50}} source={{uri: posterFrontImage}} />
      <Text>
        {quantity} x {name}
      </Text>
    </Container>
  );
}

export default OrderSummaryItems;

const Container = styled.View`
  width: 90%;
  align-self: center;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 12px;
  margin-left: 10px;
  font-family: 'Poppins-Regular';
  color: #000;
`;
