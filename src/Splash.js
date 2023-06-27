import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './Styles';

export default function Splash({navigation}) {
  setTimeout(() => {
    navigation.replace('Login');
  }, 2000);

  return (
    <View style={styles.splashCon}>
      <Image source={require('./Images/logo1.png')} style={styles.splashImg} />
    </View>
  );
}
