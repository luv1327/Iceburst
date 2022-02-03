import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Cart from '../screens/Cart';
import OrderSummary from '../screens/OrderSummary';
import ShippingDetails from '../screens/ShippingDetails';
import CartIcon from './CartIcon';
import LogoTitle from './LogoTitle';
import HamburgerIcon from './HamburgerIcon';

const Stack = createStackNavigator();

export default function MyStack({navigation}) {
  const productsOptions = {
    headerTitleAlign: 'center',
    headerTitle: props => <LogoTitle {...props} />,
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerLeft: () => <HamburgerIcon navigation={navigation} />,
    headerRight: () => <CartIcon navigation={navigation} />,
  };
  const options = {
    headerTitleAlign: 'center',
    headerTitle: props => <LogoTitle {...props} />,
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
    },

    headerRight: () => <CartIcon navigation={navigation} />,
  };
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen
        options={productsOptions}
        name="HomeScreen"
        component={Home}
      />
      <Stack.Screen options={options} name="Details" component={Details} />
      <Stack.Screen options={options} name="Cart" component={Cart} />
      <Stack.Screen
        options={options}
        name="OrderSummary"
        component={OrderSummary}
      />
      <Stack.Screen
        options={options}
        name="ShippingDetails"
        component={ShippingDetails}
      />
    </Stack.Navigator>
  );
}

// import React from 'react';
// import {
//   createStackNavigator,
//   CardStyleInterpolators,
// } from '@react-navigation/stack';
// import Details from '../screens/Details';
// import Cart from '../screens/Cart';
// import Shipping from '../screens/Shipping';
// import OrderSummary from '../screens/OrderSummary';
// import Products from '../screens/Products';
// import LogoTitle from './LogoTitle';
// import CartIcon from './CartIcon';
// import HamburgerIcon from './HamburgerIcon';

// const Stack = createStackNavigator();

// export default function Home({ navigation }) {
//   const productsOptions = {
//     headerTitleAlign: 'center',
//     headerTitle: (props) => <LogoTitle {...props} />,
//     headerStyle: {
//       backgroundColor: '#fff',
//     },
//     headerLeft: () => <HamburgerIcon navigation={navigation} />,
//     headerRight: () => <CartIcon navigation={navigation} />,
//   };
//   const options = {
//     headerTitleAlign: 'center',
//     headerTitle: (props) => <LogoTitle {...props} />,
//     headerStyle: {
//       backgroundColor: '#fff',
//     },
//     headerTintColor: 'black',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },

//     headerRight: () => <CartIcon navigation={navigation} />,
//   };
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
//       }}
//     >
//       <Stack.Screen
//         options={productsOptions}
//         name='Products'
//         component={Products}
//       />
//       <Stack.Screen options={options} name='Details' component={Details} />
//       <Stack.Screen name='Cart' component={Cart} />
//       <Stack.Screen name='Shipping' component={Shipping} />
//       <Stack.Screen name='OrderSummary' component={OrderSummary} />
//     </Stack.Navigator>
//   );
// }
