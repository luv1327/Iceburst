import React from 'react';
import styled from 'styled-components';
/* eslint-disable */

function Features() {
  return (
    <Container>
      <View>
        <ImagesContainer>
          <ImageContainer>
            <Image
              source={require('../assets/images/features/allNaturals.jpg')}
            />
            <Text>All Natural </Text>
          </ImageContainer>
          <ImageContainer>
            <Image
              source={require('../assets/images/features/expressDelivery.jpg')}
            />
            <Text>Express Delivery</Text>
          </ImageContainer>
        </ImagesContainer>
        <ImagesContainer>
          <ImageContainer>
            <Image
              source={require('../assets/images/features/fssaiAprroved.jpg')}
            />
            <Text>FSSAI Approved </Text>
          </ImageContainer>
          <ImageContainer>
            <Image source={require('../assets/images/features/healthy.jpg')} />
            <Text>Healthy Indegridients</Text>
          </ImageContainer>
        </ImagesContainer>
        <ImagesContainer>
          <ImageContainer>
            <Image source={require('../assets/images/features/secure.jpg')} />
            <Text>Secure Payments</Text>
          </ImageContainer>
          <ImageContainer>
            <Image source={require('../assets/images/features/who.jpg')} />
            <Text>WHO Protocols Followed</Text>
          </ImageContainer>
        </ImagesContainer>
      </View>
    </Container>
  );
}

export default Features;

const Container = styled.ScrollView`
  height: 100%;
  width: 100%;
  background-color: #fff;
`;

const ImagesContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  align-items: center;
`;

const ImageContainer = styled.View`
  align-items: center;
`;

const View = styled.View`
  margin-top: 10px;
`;

const Image = styled.Image`
  width: 120px;
  height: 100px;
  border-radius: 5px;
`;

const Text = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Regular';
  color: #000;
  margin-top: 10px;
  text-align: center;
  max-width: 120px;
`;
