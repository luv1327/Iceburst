import React, {useContext} from 'react';
import {FlatList, View, Text} from 'react-native';
import {ProductContext} from '../context/ProductContext';
import ProductItem from './ProductItem';
import ImageSlider from './ImageSlider';

const Products = ({navigation}) => {
  const {products, images} = useContext(ProductContext);
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={products}
      renderItem={({item}) => (
        <ProductItem item={item} navigation={navigation} />
      )}
      keyExtractor={item => item.id}
      ListHeaderComponent={<ImageSlider images={images} />}
      ListFooterComponent={
        <View style={{height: 70}}>
          <Text style={{textAlign: 'center', fontFamily: 'Poppins-Regular'}}>
            © 2022, Iceburst India
          </Text>
        </View>
      }
    />
  );
};

export default Products;
