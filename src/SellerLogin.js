import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './Styles';
import {signInWithEmailAndPassword} from '@firebase/auth';
import {auth} from './firebasecon';

export default function SellerLogin({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const create = () => {
    navigation.navigate('SellerSignup');
  };

  const SKLogin = () => {
    if (email !== '' && password !== '') {
      signInWithEmailAndPassword(auth, email, password)
        .then(console.log('shopKepper login sucess'))
        .catch(err => Alert.alert('Login Error', err.message));
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace('TabNavigatorShop');
      }
    });
    return unsubscribe;
  }, []);

  return (
    <View style={{...styles.cusLoginBody, backgroundColor: '#242424'}}>
      <View style={{...styles.cusLoginBox, backgroundColor: '#fefeff'}}>
        <View style={styles.cusLoginHeader}>
          <Text style={styles.sellerLoginHeader}>LOGIN</Text>
        </View>
        <View style={styles.cusInputField}>
          <TextInput
            placeholder="Email"
            style={styles.cusEmail}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.cusPassword}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={styles.sellerLoginFooter}>
          <TouchableOpacity style={styles.cusLoginBut} onPress={SKLogin}>
            <Text style={styles.cusLoginText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.sellerFooterText}>
            <Text style={styles.DHA}>Don't Have an account ? </Text>
            <TouchableOpacity>
              <Text style={styles.C1T} onPress={create}>
                Create one
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
