import React, {useState, createContext, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [firestoreUser, setFirestoreUser] = useState(null);
  const [userShippingData, setUserShippingData] = useState({});
  const [mobileNumber, setMobileNumber] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [currentOrder, setCurrentOrder] = useState({});
  const [toggleRegister, setToggleRegister] = useState(true);
  const [errMessage, setErrorMessage] = useState('');

  // Handle user state changes
  async function onAuthStateChanged(user) {
    setUser(user);
    if (user) {
      firestore()
        .collection('Users')
        .doc(user.uid)
        .onSnapshot(documentSnapshot => {
          setFirestoreUser(documentSnapshot.data());
        });
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  //======= Auth Section  =========//
  const handleRegister = async (email, password) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      setUser(response.user);
      setErrorMessage('');
      await firestore()
        .collection('Users')
        .doc(response.user.uid)
        .set({
          email,
          cart: [],
        })
        .then(() => {
          console.log('User added!');
        });
    } catch (err) {
      const message = err.message.substring(err.message.indexOf(']') + 1);
      setErrorMessage(message);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      setUser(response.user);
      setErrorMessage('');
    } catch (err) {
      const message = err.message.substring(err.message.indexOf(']') + 1);
      setErrorMessage(message);
    }
  };

  const handleLogout = async () => {
    try {
      await auth().signOut();
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };
  //======= Auth Section  =========//

  //======= Shipping Section  =========//
  const handleAddShippingDetailsIntoUser = () => {
    firestore()
      .collection('Users')
      .doc(user.uid)
      .update({
        shipping: userShippingData,
      })
      .then(() => {
        console.log('Shipping added!');
      });
  };

  //======= Previous Orders Section  =========//

  //======= Shipping Section  =========//

  const handleCurrentOrder = data => {
    firestore()
      .collection('Users')
      .doc(user.uid)
      .update({
        currentOrder: data,
        cart: [],
      })
      .then(() => console.log('Current Order added!'))
      .catch(err => console.log(err));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        handleRegister,
        handleLogin,
        handleLogout,
        firestoreUser,
        userShippingData,
        setUserShippingData,
        mobileNumber,
        setMobileNumber,
        formattedValue,
        setFormattedValue,
        phoneValue,
        setPhoneValue,
        handleAddShippingDetailsIntoUser,
        currentOrder,
        setCurrentOrder,
        handleCurrentOrder,
        toggleRegister,
        setToggleRegister,
        errMessage,
        setErrorMessage,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
