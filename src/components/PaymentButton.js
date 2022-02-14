import React, {useContext} from 'react';
import RazorpayCheckout from 'react-native-razorpay';
import {ProductContext} from '../context/ProductContext';
import {AuthContext} from '../context/AuthContext';
import styled from 'styled-components';

export default function PaymentButton({navigation}) {
  const {orderData, totalQuantity, cart} = useContext(ProductContext);

  const {userShippingData, user, handleCurrentOrder} = useContext(AuthContext);
  let options = {
    description: 'Brag Hospitality And Ventures LLP',
    image: 'https://i.ibb.co/Tv2XbjF/iceburst-Logo.png',
    currency: 'INR',
    key: 'rzp_test_VirZ7ip2oBYPMX',
    amount: totalQuantity() * 199 * 100,
    name: 'Iceburst',
    order_id: orderData.id, //Replace this with an order_id created using Orders API.
    prefill: {
      email: user.email,
      contact: userShippingData.mobileNumber,
      name: `${userShippingData.firstName} ${userShippingData.lastName}`,
    },
    theme: {color: '#F37254'},
  };

  return (
    <ButtonContainer
      onPress={() => {
        RazorpayCheckout.open(options)
          .then(data => {
            // handle success
            alert('Your Order Has Been Placed Successfully');
            handleCurrentOrder({order: cart, razorpayPayData: data});
            navigation.navigate('HomeScreen');
          })
          .catch(error => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
          });
      }}>
      <ButtonText>Make Payment</ButtonText>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.TouchableOpacity`
  position: absolute;
  left: 0px;
  right: 0px
  bottom: 0px
  background-color: #000;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: Podkova-Bold;
`;
