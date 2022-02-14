import React, {useContext} from 'react';
import {ProductContext} from '../context/ProductContext';
import {LogBox} from 'react-native';
import styled from 'styled-components';
import ImageSlider from '../components/ImageSlider';
import Icon from 'react-native-vector-icons/FontAwesome';
LogBox.ignoreAllLogs();

const Details = ({route, navigation}) => {
  const {handleAddCart, isAlreadyInCart} = useContext(ProductContext);
  const {
    name,
    id,
    posterFrontImage,
    posterBackImage,
    color,
    flavour,
    price,
    description,
    pairings,
  } = route.params;
  const item = route.params;
  const images = [posterFrontImage, posterBackImage];
  return (
    <Container>
      <ImageSlider images={images} />
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
        <Description>{description}</Description>
      </TextContainer>
      {isAlreadyInCart(id) ? (
        <ButtonContainer>
          <CartButton onPress={() => navigation.navigate('Cart')}>
            <CartText> Go To Cart </CartText>
          </CartButton>
          <ExploreButton onPress={() => navigation.navigate('HomeScreen')}>
            <ExploreText> Explore Other Flavours </ExploreText>
          </ExploreButton>
        </ButtonContainer>
      ) : (
        <CartButton onPress={() => handleAddCart(item)}>
          <CartText> Add To Cart </CartText>
        </CartButton>
      )}
      <Divider></Divider>
      <PairingsContainer>
        <PairingsTitle>Pairings </PairingsTitle>
        <PairingsText>Mocktail - {pairings.mocktail} </PairingsText>
        <PairingsText>Cocktail - {pairings.cocktail} </PairingsText>
      </PairingsContainer>
    </Container>
  );
};

export default Details;

const Container = styled.ScrollView`
  height: 100%;
`;

const TextContainer = styled.View`
  width: 90%;
  height: auto;
  align-self: center;
`;

const Name = styled.Text`
  font-size: 28px;
  letter-spacing: 0.5px;
  color: #000;
  font-family: 'Poppins-Bold';
`;

const Flavour = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Bold';
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
  margin-top: 10px;
`;

const Description = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  margin-top: 15px;
  color: #808080;
`;

const CartButton = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  align-self: center;
  background-color: #000;
  border-radius: 5px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`;

const ExploreButton = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  align-self: center;
  border : 1px solid #000
  border-radius: 5px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`;

const CartText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'Podkova-Bold';
`;

const ExploreText = styled.Text`
  color: #000;
  font-size: 18px;
  font-family: 'Podkova-Bold';
`;

const ButtonContainer = styled.View``;

const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: #eee;
  margin-top: 30px;
`;

const PairingsContainer = styled.View`
  width: 90%;
  height: auto;
  align-self: center;
  height: auto;
  margin-bottom: 50px;
`;
const PairingsTitle = styled.Text`
  font-size: 22px;
  font-family: 'Podkova-Bold';
  margin-top: 20px;
  color: #000;
`;

const PairingsText = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  margin-top: 10px;
  color: #808080;
`;
