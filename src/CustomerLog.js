import {View, Text, Pressable, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './Styles';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {signInWithEmailAndPassword} from '@firebase/auth';
import {auth} from './firebasecon';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {db} from './firebasecon';
import {collection, getDocs, addDoc, setDoc, doc} from 'firebase/firestore';

export default function CustomerLogin() {
  const [mode, setMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [contactt, setContactt] = useState('');
  const role = 'Customer';
  const navigation = useNavigation();

  const colorr = mode ? '#242424' : '#fefeff';
  const colorb = mode ? '#fefeff' : '#242424';
  const heightt = mode ? 300 : 560;
  const widthh = mode ? 300 : 350;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace('TabNavigator');
      }
    });
    return unsubscribe;
  }, []);

  const Login = () => {
    if (email !== '' && password !== '') {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Login success'))
        .catch(err => Alert.alert('Login Error', err.message));
    }
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {
        try {
          const UserRef = doc(db, 'Users', auth.currentUser.uid);
          setDoc(
            UserRef,
            {
              Name: username,
              Role: role,
              Email: email,
              Location: location,
              Contact: contactt,
              uid: auth.currentUser.uid,
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
    <View style={{...styles.cusSignupBody, backgroundColor: colorb}}>
      <View
        style={{
          ...styles.cusSignupBox,
          backgroundColor: colorr,
          height: heightt,
          width: widthh,
        }}>
        <View style={styles.cusLoginHeader}>
          <Pressable style={styles.cusLogin} onPress={() => setMode(true)}>
            <Text style={styles.cusLogText}>Login</Text>
          </Pressable>
          <Pressable style={styles.cusSignup} onPress={() => setMode(false)}>
            <Text style={styles.cusSignText}> Signup</Text>
          </Pressable>
        </View>
        {mode ? (
          <View style={styles.cusInputField}>
            <TextInput
              placeholder="Email"
              style={styles.cusEmail}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.cusPassword}
              onChangeText={text => setPassword(text)}
            />
          </View>
        ) : (
          <View style={styles.cusInputField}>
            <TextInput
              placeholder="Email"
              style={styles.cusEmailSign}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.cusPasswordSign}
              onChangeText={text => setPassword(text)}
            />
            <TextInput
              placeholder="UserName"
              style={styles.cusUsernameSign}
              onChangeText={text => setUsername(text)}
            />
            <TextInput
              placeholder="Contact"
              style={styles.cusContactSign}
              onChangeText={text => setContactt(text)}
            />
            <TextInput
              placeholder="location"
              style={styles.cusLocationSign}
              onChangeText={text => setLocation(text)}
              multiline={true}
            />
          </View>
        )}
        {mode ? (
          <TouchableOpacity style={styles.cusLoginBut} onPress={Login}>
            <Text style={styles.cusLoginText}>Login</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.cusLoginBut} onPress={signUp}>
            <Text style={styles.cusLoginText}>Signup</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
