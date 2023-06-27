import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './Splash';
import Login from './Login';
import CustomerLogin from './CustomerLog';
import SellerLogin from './SellerLogin';
import SellerSignup from './SellerSignup';
import TabNavigator from './TabNavigator';
import TabNavigatorShop from './TabNavigatorShop';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CustomerLogin"
          component={CustomerLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SellerLogin"
          component={SellerLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SellerSignup"
          component={SellerSignup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigatorShop"
          component={TabNavigatorShop}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
