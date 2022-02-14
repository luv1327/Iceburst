import React from 'react';
import styled from 'styled-components';

export default function About() {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <TextContainer>
        <IceburstText>Iceburst </IceburstText>
        <Text>
          {`A first of its kind, Artisan frozen mix, handcrafted with 100% natural and fresh ingredients. With no added colour or preservatives, we give you a restaurant style drink at the convenience of your home or anywhere!

Enjoying a fancy home cooked meal with off the shelf drinks, but missing that great mocktail or cocktail to pair it with? The pandemic had all of us becoming master chefs at home but a good accompaniment was missed! That's when Iceburst was born.

Introducing ready to use, easy, one step frozen mixes with fresh ingredients, keeping it cool, flavourful and pure. No need to go through the mundane process of washing, chopping, juicing, muddling or garnishing!

Just sit back, relax...peel, pop, drop and stir the iceburst cubes to enjoy the magical burst of freshness and flavours at your convenience!

Cheers!`}
        </Text>
      </TextContainer>
    </Container>
  );
}

const Container = styled.ScrollView`
  background-color: #fff;
  height: 100%;
  width: 100%;
`;

const TextContainer = styled.View`
  padding: 40px 20px 0 20px;
  margin-bottom: 40px;
`;

const Text = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  line-height: 24px;
`;

const IceburstText = styled.Text`
  font-family: 'Podkova-Bold';
  font-size: 24px;
  line-height: 24px;
  color: #000;
  margin-bottom: 10px;
`;
