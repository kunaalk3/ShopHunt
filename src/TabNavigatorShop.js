import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Inventory from './Inventory';
import ProfileShop from './ProfileShop';
import Ionic from 'react-native-vector-icons/Ionicons';
import {styles} from './Styles';
import FontAweasome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function TabNavigatorShop() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      headerShown={false}
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 15,
          borderRadius: 15,
          backgroundColor: '#ffffff',
          height: 80,
        },
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Inventory') {
            iconName = focused ? 'cube' : 'cube-outline';
          } else if (route.name === 'ProfileShop') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          return (
            <Ionic
              name={iconName}
              style={{
                color: '#242424',
              }}
              size={27}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Inventory" component={Inventory} />
      <Tab.Screen name="ProfileShop" component={ProfileShop} />
    </Tab.Navigator>
  );
}
