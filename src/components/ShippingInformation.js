import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import styled from 'styled-components';

export default function ShippingInformation({navigation}) {
  const {userShippingData} = useContext(AuthContext);
  return (
    <ShippingContainer>
      <Title>Shipping Here </Title>
      <ShippingInformationContainer>
        <Text>
          {userShippingData.firstName} {userShippingData.lastName}
        </Text>
        <Text>{userShippingData.mobileNumber}</Text>
        <Text>{userShippingData.building},</Text>
        <Text>{userShippingData.address},</Text>
        <Text>
          {userShippingData.city} - {userShippingData.pincode}
        </Text>
        <ChangeContainer onPress={() => navigation.navigate('ShippingDetails')}>
          <ChangeButton>Change</ChangeButton>
        </ChangeContainer>
      </ShippingInformationContainer>
    </ShippingContainer>
  );
}

const ShippingContainer = styled.View`
  width: 90%;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 12px;
  font-family: Poppins-Bold;
  margin-bottom: 5px;
  color: #000;
`;

const ShippingInformationContainer = styled.View`
  border-bottom-width: 1px
  border-bottom-color: lightgray;
  border-radius: 5px;
  padding-bottom: 10px;
`;

const Text = styled.Text`
  font-size: 12px;
  margin-bottom: 2px;
  font-family: 'Poppins-Regular';
  color: #000;
`;

const ChangeContainer = styled.TouchableOpacity`
  width: 44px;
  margin-top: 5px;
`;

const ChangeButton = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-Regular';
  color: #000;
  border-bottom-width: 1px;
  border-bottom-color: blue;
  color: blue;
`;
