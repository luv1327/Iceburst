import React, {createContext, useContext, useEffect, useState} from 'react';
import allProducts from '../components/ProductsData';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from './AuthContext';

const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const products = allProducts;
  const {user} = useContext(AuthContext);
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [cart, setCart] = useState([]); // Initial empty array of cart items

  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .doc(user?.uid)
      .onSnapshot(documentSnapshot => {
        if (documentSnapshot.exists) {
          setCart(documentSnapshot.data().cart);
          setLoading(false);
        }
      });

    return () => subscriber();
  }, [user?.uid]);

  const totalQuantity = () => {
    const quantityArr = cart.map(item => item.quantity);
    const totalCount = quantityArr.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0,
    );
    return totalCount;
  };

  const handleAddCart = item => {
    firestore()
      .collection('Users')
      .doc(user?.uid)
      .update({
        cart: firestore.FieldValue.arrayUnion(item),
      })
      .then(() => {
        console.log('Item Added To Cart');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleRemoveCart = item => {
    firestore()
      .collection('Users')
      .doc(user?.uid)
      .update({
        cart: firestore.FieldValue.arrayRemove(item),
        totalQuantity: totalQuantity(),
      })
      .then(() => {
        console.log('Item Removed From Cart');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const isAlreadyInCart = id => {
    const product = cart.find(item => item.id === id);
    return product ? true : false;
  };

  const handleAddingQuantity = id => {
    const newCart = cart.map(item => {
      if (item.id === id) {
        return {...item, quantity: item.quantity + 1};
      }
      return item;
    });
    setCart(newCart);
  };

  const handleRemoveQuantity = id => {
    const newCart = cart.map(item => {
      if (item.id === id) {
        return {...item, quantity: item.quantity - 1};
      }
      return item;
    });
    setCart(newCart);
  };

  const handleContinue = () => {
    firestore()
      .collection('Users')
      .doc(user?.uid)
      .update({
        cart,
        totalQuantity: totalQuantity(),
      })
      .then(() => {
        console.log('Cart Updated and navigated successfully');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        handleAddCart,
        loading,
        setLoading,
        cart,
        setCart,
        handleContinue,
        handleRemoveQuantity,
        handleAddingQuantity,
        isAlreadyInCart,
        handleRemoveCart,
        totalQuantity,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export {ProductContext, ProductProvider};
