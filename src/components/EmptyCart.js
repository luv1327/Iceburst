import React from 'react';
import styled from 'styled-components';

function EmptyCart({navigation, message}) {
  return (
    <Container>
      <Image source={require('../assets/images/dog.png')} />
      <EmptyCartText>{message.message} </EmptyCartText>
      <Text>{message.subMessage} </Text>
      <ButtonContainer onPress={() => navigation.navigate('HomeScreen')}>
        <ButtonText>Explore</ButtonText>
      </ButtonContainer>
    </Container>
  );
}

export default EmptyCart;

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  width: 160px;
  height: 160px;
  margin-bottom: 20px;
  margin-top: 80px;
`;

const EmptyCartText = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-Regular';
  color: #000;
  margin-bottom: 5px;
  margin-top: 20px;
`;

const Text = styled.Text`
  font-family: 'Poppins-Regular';
  width: 250px;
  text-align: center;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: #000;
  width: 90%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 30px;
  align-self: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'Poppins-Bold';
`;
