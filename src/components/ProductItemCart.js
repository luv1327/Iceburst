import React, {useContext} from 'react';
import {ProductContext} from '../context/ProductContext';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddIcon from 'react-native-vector-icons/Ionicons';
import DecreaseIcon from 'react-native-vector-icons/Ionicons';

export default function ProductItemCart({navigation, item}) {
  const {name, quantity, posterFrontImage, id, flavour, price} = item;
  const {handleAddingQuantity, handleRemoveQuantity, handleRemoveCart} =
    useContext(ProductContext);

  return (
    <Container>
      <ImageContainer onPress={() => navigation.navigate('Details', item)}>
        <ItemImage source={{uri: posterFrontImage}} />
      </ImageContainer>
      <TextAndButtonContainer>
        <TextContainer>
          <Name>{name}</Name>
          <Flavour>{flavour}</Flavour>
          <PriceContainer>
            <Icon
              style={{alignSelf: 'center'}}
              name="rupee"
              size={12}
              color="#000"
            />
            <Price>{price}</Price>
          </PriceContainer>
        </TextContainer>
        <QuantityContainerAndRemoveContainer>
          <QuantityContainer>
            {quantity > 1 && (
              <IconContainer onPress={() => handleRemoveQuantity(id)}>
                <DecreaseIcon
                  name="remove-circle-outline"
                  size={30}
                  color="#000"
                />
              </IconContainer>
            )}
            <Quantity>{quantity}</Quantity>
            <IconContainer onPress={() => handleAddingQuantity(id)}>
              <AddIcon name="add-circle" size={30} color="#000" />
            </IconContainer>
          </QuantityContainer>
          <RemoveContainer onPress={() => handleRemoveCart(item)}>
            <RemoveText> Remove </RemoveText>
          </RemoveContainer>
        </QuantityContainerAndRemoveContainer>
      </TextAndButtonContainer>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 16px;
`;

const ImageContainer = styled.TouchableOpacity``;

const ItemImage = styled.Image`
  width: 140px;
  height: 120px;
  border-radius: 10px;
`;

const TextAndButtonContainer = styled.View`
  height: 120px;
`;

const TextContainer = styled.View`
  width: 170px;
  align-self: center;
  margin-bottom: 20px;
`;

const Name = styled.Text`
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #000;
  font-family: 'Poppins-Bold';
`;

const Flavour = styled.Text`
  font-size: 10px;
  font-family: 'Poppins-Bold';
  margin-bottom: 10px;
`;

const Price = styled.Text`
  color: #000;
  font-family: 'Podkova-Bold';
  margin-left: 2px;
  margin-top: -3px;
`;

const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90px;
  justify-content: space-between;
  margin-left: -3px;
`;

const Quantity = styled.Text`
  font-size: 16px;
  color: #000;
  font-family: 'Podkova-Bold';
`;

const IconContainer = styled.TouchableOpacity``;

const QuantityContainerAndRemoveContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const RemoveContainer = styled.Pressable``;

const RemoveText = styled.Text`
  font-size: 12px;
  color: red;
  font-family: 'Podkova-Regular';
`;
