import React from 'react';
import styled from 'styled-components';

function CartFooter({totalQuantity}) {
  return (
    <Container>
      <Divider></Divider>
      <ChildContainer>
        <Text>Total Quantity</Text>
        <Text>{totalQuantity()}</Text>
      </ChildContainer>
      <ChildContainer>
        <Text>Bag Total</Text>
        <Text>Rs. {totalQuantity() * 199}</Text>
      </ChildContainer>
      <ChildContainer>
        <Text>Delivery Charge</Text>
        <Text>{totalQuantity() >= 5 ? 'Free' : 'As per we fast'}</Text>
      </ChildContainer>
      <ChildContainer>
        <Text>Delivery Period</Text>
        <Text>24 Hrs</Text>
      </ChildContainer>
      <Divider></Divider>
    </Container>
  );
}

export default CartFooter;

const Container = styled.View`
  height: 300px;
  margin-top: 30px;
`;

const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: #eee;
  margin: 5px 0 5px 0;
`;

const ChildContainer = styled.View`
  width: 90%;
  align-self: center;
  margin: 7px 0 7px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: #000;
`;
