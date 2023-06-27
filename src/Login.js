import {View, Text, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const Login = ({navigation}) => {
  const cusLog = () => {
    navigation.navigate('CustomerLogin');
  };
  const sellerLog = () => {
    navigation.navigate('SellerLogin');
  };
  return (
    <View style={styles.logBody}>
      <Text style={styles.logWel}>Welcome To</Text>

      <Image source={require('./Images/logo7.png')} style={styles.logLogo} />

      <View style={styles.logFot}>
        <Text style={styles.logCon}>Continue As</Text>
        <TouchableOpacity style={styles.butCus} onPress={cusLog}>
          <Text style={styles.textCus}>Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.butShop} onPress={sellerLog}>
          <Text style={styles.textShop}>ShopKepper</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
