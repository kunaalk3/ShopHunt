import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Styles';
import {useNavigation} from '@react-navigation/native';
import {createUserWithEmailAndPassword} from '@firebase/auth';
import {auth, db} from './firebasecon';
import {doc, setDoc} from 'firebase/firestore';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function SellerSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactt, setContactt] = useState('');
  const [shopname, setShopname] = useState('');
  const [location, setLocation] = useState('');
  const [Imageurl, setImageurl] = useState('');
  const role = 'ShopKepper';
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace('TabNavigatorShop');
      }
    });
    return unsubscribe;
  }, []);

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {
        try {
          const UserRef = doc(db, 'Users', auth.currentUser.uid);
          setDoc(
            UserRef,
            {
              Name: shopname,
              Role: role,
              Email: email,
              Location: location,
              Contact: contactt,
              uid: auth.currentUser.uid,
              Image: {
                uri: Imageurl,
              },
            },
            {merge: true},
          );
          console.log('Document written with ID: ', UserRef.id);
        } catch (e) {
          console.error('Error adding document: ', e);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
      <View style={styles.SSBody}>
        <View style={styles.SSBox}>
          <View style={styles.SSHeader}>
            <Text style={styles.SSHeaderText}>Create Account</Text>
          </View>
          <View>
            <TextInput
              placeholder="Email"
              style={styles.SSEmail}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              style={styles.SSPassword}
              onChangeText={text => setPassword(text)}
            />
            <TextInput
              placeholder="Contact"
              style={styles.SSPassword}
              onChangeText={text => setContactt(text)}
            />

            <View style={styles.SSShopCom}>
              <Text style={styles.SSShopText}>Name of Your Shop</Text>
              <TextInput
                placeholder="Shop Name"
                style={styles.SSShop}
                onChangeText={text => setShopname(text)}
              />
            </View>
            <View style={styles.SSFooter}>
              <Text style={styles.SSFooterText}>Shop location</Text>
              <TextInput
                placeholder="Location"
                style={styles.SSFooterLink}
                multiline={true}
                onChangeText={text => setLocation(text)}
              />
              <TextInput
                placeholder="shop image Url"
                style={styles.SSFooterLink}
                multiline={true}
                onChangeText={text => setImageurl(text)}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.SSRegister} onPress={signUp}>
            <Text style={styles.SSRegisterText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
