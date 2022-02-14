import React from 'react';
import styled from 'styled-components';
import {Linking} from 'react-native';

export default function Reach() {
  return (
    <Container>
      <AddressContainer>
        <MapImage
          // eslint-disable-next-line
          source={require('../assets/images/map.png')}
        />
        <Title>Address </Title>
        <Text>
          108, Madhuban, 23, Cochin Street, 323, Shahid Bhagat singh Road, Fort,
          Mumbai 400001, Maharashtra, India.
        </Text>
        <Title>Contact Us On </Title>
        <Text>Moile - 9136936969 </Text>
        <Text>Email - info@iceburst.in</Text>
        <Links
          onPress={() =>
            Linking.openURL('https://www.instagram.com/iceburstindia/')
          }>
          <LinksText>Insagram</LinksText>
        </Links>
        <Links onPress={() => Linking.openURL('https://www.iceburst.in/')}>
          <LinksText>Website</LinksText>
        </Links>
      </AddressContainer>
    </Container>
  );
}

const Container = styled.ScrollView`
  height: 100%;
  width: 100%;
  background-color: #fff;
`;

const AddressContainer = styled.View`
  align-self: center;
  width: 90%;
  margin-top: 30px;
`;

const MapImage = styled.Image`
  height: 150px;
  width: 100%;
  border-radius: 10px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-Bold';
  margin-top: 20px;
  color: #000;
`;

const Text = styled.Text`
  font-size: 15px;
  font-family: 'Poppins-Regular';
  margin-top: 5px;
`;

const Links = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: blue;
  width: 70px;
  margin-bottom: 5px;
`;

const LinksText = styled.Text`
  font-size: 15px;
  font-family: 'Poppins-Regular';
  margin-top: 5px;
  color: blue;
  text-align: center;
`;
