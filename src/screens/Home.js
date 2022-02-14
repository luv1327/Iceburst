import React from 'react';
import Products from '../components/Products';
import styled from 'styled-components';
import DeliveryMessage from '../components/DeliveryMessage';

export default function Home({navigation}) {
  return (
    <Container>
      <DeliveryMessage message="We Current Deliver Only In Mumbai" />
      <Products navigation={navigation} />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  background-color: #fff;
`;
