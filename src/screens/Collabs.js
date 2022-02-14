import React from 'react';
import styled from 'styled-components';

export default function Collabs() {
  return (
    <Container>
      <CollabsContainer>
        <BrandImages
          // eslint-disable-next-line
          source={require('../assets/images/partners/sepoyPoster.jpg')}
        />
        <BrandName>Iceburst X Sepoy {'&'} Co</BrandName>
        <BrandText>
          {`Sepoy&Co has partnered with Iceburst to bring to you'll an enhanced experience by amalgamating flavours.

Order our suggestive pairing combinations (1 tray Iceburst + 2 Sepoy&Co tonics) for a special price of just Rs. 299 !

Pairings as below:

Botanical cooler + Elderflower tonic

Spanish Summer + Hibiscus tonic

Tropical Muddle + Mint tonic

Freshpresso + Spiced Grapefruit tonic

Hurry, get in touch with us on 9136936969 to avail this special offer.`}
        </BrandText>
        <Divider />
        <BrandImages
          // eslint-disable-next-line
          source={require('../assets/images/partners/saffronStaysPoster.jpg')}
        />
        <BrandName>Iceburst X Saffron Stays</BrandName>
        <BrandText>{`Vacation Home Rental

Stunning Private Villas & X Series Estates

Winner: Luxebook Most Powerful 2020 - Top 100 Luxury Brands

https://www.saffronstays.com/`}</BrandText>
      </CollabsContainer>
    </Container>
  );
}

const Container = styled.ScrollView`
  height: 100%;
  width: 100%;
  background-color: #fff;
`;

const CollabsContainer = styled.View`
  align-self: center;
  width: 90%;
  margin-top: 30px;
`;

const BrandImages = styled.Image`
  height: 320px;
  width: 100%;
  border-radius: 5px;
  align-self: center;
`;

const BrandName = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-Bold';
  margin-top: 10px;
  color: #000;
`;

const BrandText = styled.Text`
  font-size: 15px;
  font-family: 'Poppins-Regular';
  margin-top: 5px;
  margin-bottom: 30px;
`;

const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: #000;
  margin-top: 30px;
  margin-bottom: 30px;
`;
