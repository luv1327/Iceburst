import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

export default function ProductItem({navigation, item}) {
  const {name, posterFrontImage} = item;
  return (
    <View>
      <Text> {name}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
        <Image
          style={{width: 200, height: 150}}
          source={{
            uri: posterFrontImage,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
