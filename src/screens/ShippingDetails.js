import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {AuthContext} from '../context/AuthContext';
import PhonePicker from '../components/PhonePicker';
import styled from 'styled-components';

export default function ShippingDetails({navigation}) {
  const [focus, setFocus] = useState('');
  const {
    mobileNumber,
    setMobileNumber,
    setUserShippingData,
    handleAddShippingDetailsIntoUser,
  } = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: 'Luv',
      lastName: 'Singh',
      building: '1304, A Wing, Raheja Atlantis',
      address: 'Lohnakdwala Road, Near Kudrat Hospital',
      message: 'I want this order to be delivered to the customer',
      pincode: '400005',
      city: 'Mumbai',
    },
  });

  const borderStyle = {
    borderWidth: 2,
    borderColor: '#000',
  };

  const onSubmit = async data => {
    setUserShippingData({...data, mobileNumber: 7506875088});
    await handleAddShippingDetailsIntoUser();
    await navigation.navigate('OrderSummary');
  };

  return (
    <Container style={{flex: 1}}>
      <ShippingDetailsContainer showsVerticalScrollIndicator={false}>
        <PersonalInformationContainer>
          <Label>Personal Information</Label>
          <Controller
            control={control}
            rules={{
              maxLength: 20,
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder={'First Name'}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                onFocus={() => setFocus('firstName')}
                style={focus === 'firstName' ? borderStyle : null}
              />
            )}
            name="firstName"
          />
          {errors.firstName && <Error>Please Add Your First Name</Error>}

          <Controller
            control={control}
            rules={{
              maxLength: 20,
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Last Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                onFocus={() => setFocus('lastName')}
                style={focus === 'lastName' ? borderStyle : null}
              />
            )}
            name="lastName"
          />
          {errors.lastName && <Error>Please Add Your Last Name</Error>}
          <PhonePicker
            mobileNumber={mobileNumber}
            setMobileNumber={setMobileNumber}
          />
        </PersonalInformationContainer>
        <ShippingAddressContainer>
          <Label>Shipping Information </Label>
          <Controller
            control={control}
            rules={{
              maxLength: 50,
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Building Name, Number etc."
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                onFocus={() => setFocus('building')}
                style={focus === 'building' ? borderStyle : null}
              />
            )}
            name="building"
          />
          {errors.apartment && (
            <Error>Please Enter Building Name, Number etc.</Error>
          )}
          {errors.lastName && <Text>This is required.</Text>}
          <Controller
            control={control}
            rules={{
              maxLength: 100,
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Adress"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                onFocus={() => setFocus('address')}
                style={focus === 'address' ? borderStyle : null}
              />
            )}
            name="address"
          />
          {errors.address && <Error> Please enter your address</Error>}
          <Controller
            control={control}
            rules={{
              maxLength: 20,
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="City"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                onFocus={() => setFocus('city')}
                style={focus === 'city' ? borderStyle : null}
              />
            )}
            name="city"
          />
          {errors.city && <Error> Please enter your city</Error>}
          <Controller
            control={control}
            rules={{
              maxLength: 10,
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Pincode"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
                onFocus={() => setFocus('pincode')}
                style={focus === 'pincode' ? borderStyle : null}
              />
            )}
            name="pincode"
          />
          {errors.pincode && <Error> Please enter your pincode</Error>}

          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Got A Message For Us?"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                onFocus={() => setFocus('message')}
                style={focus === 'message' ? borderStyle : null}
              />
            )}
            name="message"
          />
        </ShippingAddressContainer>
        <View style={{height: 80}}></View>
      </ShippingDetailsContainer>
      <ButtonContainer onPress={handleSubmit(onSubmit)}>
        <ButtonText>Countinue</ButtonText>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const ShippingDetailsContainer = styled.ScrollView`
  padding: 20px;
`;

const Input = styled.TextInput`
  border : 1px solid lightgray
  font-size: 16px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding-left : 20px;
  font-family: 'Poppins-Regular';
`;

const PersonalInformationContainer = styled.View`
  margin-bottom: 5px;
`;

const ShippingAddressContainer = styled.View``;

const Label = styled.Text`
  font-size: 18px;
  font-family: Poppins-Bold;
  margin-bottom: 5px;
  color: #000;
`;

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

const Error = styled.Text`
  color: red;
  font-size: 12px;
  font-family: Poppins-Regular;
  margin-bottom: 6px;
`;
