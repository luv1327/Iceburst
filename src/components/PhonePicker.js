import React, {useContext, useRef} from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {AuthContext} from '../context/AuthContext';

const PhonePicker = () => {
  const {setFormattedValue, phoneValue, setPhoneValue, setMobileNumber} =
    useContext(AuthContext);
  const phoneInput = useRef(<PhoneInput />);
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <View>
        <SafeAreaView>
          <View style={styles.wrapper}>
            <PhoneInput
              ref={phoneInput}
              defaultValue={phoneValue}
              defaultCode="IN"
              layout="second"
              onChangeText={text => {
                setPhoneValue(text);
                setMobileNumber(text);
              }}
              onChangeFormattedText={text => {
                setFormattedValue(text);
              }}
              withDarkTheme
              containerStyle={styles.phoneInput}
              codeTextStyle={styles.codeText}
              textInputStyle={styles.textInput}
              onPressIn={() => console.log('PressIn')}
            />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  phoneInput: {
    padding: 0,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    marginBottom: 10,
    width: '100%',
    height: 50,
  },
  codeText: {
    padding: 0,
  },
  textInput: {
    padding: 0,
    height: 40,
  },
});

export default PhonePicker;
