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

  // Handle user state changes
  function onAuthStateChanged(user) {
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

  const handleRegister = async () => {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      setUser(response.user);
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
      console.log(err);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      setUser(response.user);
    } catch (err) {
      console.log(err);
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
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
