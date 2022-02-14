import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProductItem({navigation, item}) {
  const {name, flavour, price, color, posterFrontImage} = item;
  return (
    <Container>
      <ImageContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
          <ProductImage
            source={{
              uri: posterFrontImage,
            }}
          />
        </TouchableOpacity>
      </ImageContainer>
      <TextContainer>
        <Name>{name}</Name>
        <Flavour style={{color}}>{flavour}</Flavour>
        <PriceContainer>
          <Icon
            style={{alignSelf: 'center'}}
            name="rupee"
            size={18}
            color="#000"
          />
          <Price>{price}</Price>
        </PriceContainer>
      </TextContainer>
    </Container>
  );
}

const Container = styled.View`
  background-color: #fff;
  width: 90%;
  margin: 0 auto 20px auto;
  height: 320px;
  border-radius: 5px;
  elevation: 5;
`;

const ImageContainer = styled.View`
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const ProductImage = styled.Image`
  height: 170px;
  width: 290px;
  border-radius: 5px;
`;

const TextContainer = styled.View`
  width: 290px;
  height: 50px;
  align-self: center;
`;

const Name = styled.Text`
  font-size: 28px;
  letter-spacing: 0.5px;
  margin-top: 10px;
  color: #000;
  font-family: 'Poppins-Bold';
`;

const Flavour = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Bold';
  margin-top: 5px;
`;

const Price = styled.Text`
  font-size: 18px;
  color: #000;
  font-family: 'Podkova-Bold';
  margin-left: 2px;
  margin-top: -3px;
`;

const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;
