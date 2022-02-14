import React from 'react';
import styled from 'styled-components';

export default function DeliveryMessage({message}) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}

const Container = styled.View`
  background-color: orange;
  width: 100%;
  height: 34px;
  justify-content: center;
`;
const Message = styled.Text`
  color: white;
  font-size: 15px;
  text-align: center;
  font-family: 'Poppins-Bold';
`;
