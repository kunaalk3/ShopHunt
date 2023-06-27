import {
  View,
  Text,
  Image,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './Styles';
import Ionic from 'react-native-vector-icons/Ionicons';
import {signOut} from '@firebase/auth';
import {auth, db} from './firebasecon';
import {useNavigation} from '@react-navigation/native';
import {doc, getDoc, updateDoc} from 'firebase/firestore';

export default function Profile() {
  const navigation = useNavigation();
  const [docc, setDocc] = useState('');
  const [UserData, setUserData] = useState({});
  const [newLocation, setNewLocation] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newContact, setNewContact] = useState('');
  const [locationModal, setLocationModal] = useState(false);
  const [nameModal, setNameModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const UserRef = doc(db, 'Users', auth.currentUser.uid);
  const [imageModal, setImageModal] = useState(false);
  const [newUri, setNewUri] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const docSnap = await getDoc(UserRef);
    const help = docSnap.data();
    setUserData(help);
  };

  LogOut = () => {
    signOut(auth).then(navigation.navigate('Login'));
  };

  UpdateLocation = async () => {
    await updateDoc(UserRef, {
      Location: newLocation,
    });
    setLocationModal(false);
  };

  UpdateUsername = async () => {
    await updateDoc(UserRef, {
      Name: newUsername,
    });
    setNameModal(false);
  };

  UpdateAvatar = async () => {
    await updateDoc(UserRef, {
      Image: {
        uri: newUri,
      },
    });
    setImageModal(false);
  };

  UpdateContact = async () => {
    await updateDoc(UserRef, {
      Contact: newContact,
    });
    setContactModal(false);
  };

  const test = () => {
    console.log('pressed');
  };
  return (
    <View style={styles.CPBody}>
      {/* LOCATION MODAL */}
      <Modal
        transparent={true}
        visible={locationModal}
        onRequestClose={() => setLocationModal(false)}>
        <View style={styles.CPModalContainer}>
          <View style={styles.CPModalLocation}>
            <Text style={styles.CPModalText}>Update Location</Text>
            <TextInput
              style={styles.CPModalInput}
              placeholder="*New Location"
              onChangeText={text => setNewLocation(text)}
            />
            <TouchableOpacity
              style={styles.CPModalButton}
              onPress={UpdateLocation}>
              <Text style={styles.CPModalButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* NAME MODAL */}
      <Modal
        transparent={true}
        visible={nameModal}
        onRequestClose={() => setNameModal(false)}>
        <View style={styles.CPModalContainer}>
          <View style={styles.CPModalLocation}>
            <Text style={styles.CPModalText}>Update UserName</Text>
            <TextInput
              style={styles.CPModalInput}
              placeholder="*New UserName"
              onChangeText={text => setNewUsername(text)}
            />
            <TouchableOpacity
              style={styles.CPModalButton}
              onPress={UpdateUsername}>
              <Text style={styles.CPModalButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Contact MODAL */}
      <Modal
        transparent={true}
        visible={contactModal}
        onRequestClose={() => setContactModal(false)}>
        <View style={styles.CPModalContainer}>
          <View style={styles.CPModalLocation}>
            <Text style={styles.CPModalText}>Update Contact</Text>
            <TextInput
              style={styles.CPModalInput}
              placeholder="*New Contact"
              onChangeText={text => setNewContact(text)}
            />
            <TouchableOpacity
              style={styles.CPModalButton}
              onPress={UpdateContact}>
              <Text style={styles.CPModalButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Image Modal */}

      <Modal
        transparent={true}
        visible={contactModal}
        onRequestClose={() => setImageModal(false)}>
        <View style={styles.CPModalContainer}>
          <View style={styles.CPModalLocation}>
            <Text style={styles.CPModalText}>Update Avatar</Text>
            <TextInput
              style={styles.CPModalInput}
              placeholder="*image Url"
              onChangeText={text => setNewUri(text)}
            />
            <TouchableOpacity
              style={styles.CPModalButton}
              onPress={UpdateContact}>
              <Text style={styles.CPModalButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.CPImageContainer}>
        <Image
          style={styles.CPImage}
          source={require('./Images/Logo/MalePortrait.jpg')}
        />
      </View>
      <View style={styles.CPUserDetailContainer}>
        <Text style={styles.CPUserName}>{UserData.Name}</Text>
        <View style={styles.CPLocationContainer}>
          <Ionic style={styles.CPLocationIcon} name="pin" size={17} />
          <Text style={styles.CPLocation}>{UserData.Location}</Text>
        </View>
      </View>

      <View style={styles.CPIconContainer}>
        <TouchableOpacity
          style={styles.CPIcons}
          onPress={() => setContactModal(true)}>
          <Ionic style={styles.CPIcon} name="call" size={24} />
          <Text style={styles.CPIconText}>contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.CPIcons}
          onPress={() => setLocationModal(true)}>
          <Ionic style={styles.CPIcon} name="location" size={24} />
          <Text style={styles.CPIconText}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.CPIcons}
          onPress={() => setImageModal(true)}>
          <Ionic style={styles.CPIcon} name="happy" size={24} />
          <Text style={styles.CPIconText}>Avatar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.CPOptionsContainer}>
        <TouchableOpacity
          style={styles.CPOptions}
          onPress={() => setNameModal(true)}>
          <Ionic name="person" size={20} style={styles.CPOptionsIcon} />
          <Text style={styles.CPOptionsText}>Change UserName</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.CPOptions}
          onPress={() => setImageModal(true)}>
          <Ionic name="lock-closed" size={20} style={styles.CPOptionsIcon} />
          <Text style={styles.CPOptionsText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CPOptions} onPress={LogOut}>
          <Ionic name="exit-outline" size={20} style={styles.CPOptionsIcon} />
          <Text style={styles.CPOptionsText}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
