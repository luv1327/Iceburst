import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';
import {ProductContext} from '../context/ProductContext';
import ProductItem from './ProductItem';

const Products = ({navigation}) => {
  const {products} = useContext(ProductContext);
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({item}) => (
          <ProductItem item={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Products;
