import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './Styles';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import Data from './Data';
import Ionic from 'react-native-vector-icons/Ionicons';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import {auth, db} from './firebasecon';

export default function Inventory() {
  const [addItem, setAddItem] = useState(false);
  const [editItem, setEditItem] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [prodData, setProdData] = useState([]);
  const [today, setToday] = useState();

  const Add = async () => {
    try {
      const UserRef = doc(db, 'Users', auth.currentUser.uid);
      const docSnap = await getDoc(UserRef);
      const UserData = docSnap.data();
      const ProductRef = doc(
        db,
        'Products',
        name.toLowerCase(),
        'ShopName',
        auth.currentUser.uid,
      );
      const UserProductRef = doc(
        db,
        'Users',
        auth.currentUser.uid,
        'Products',
        name.toLowerCase(),
      );
      await setDoc(
        ProductRef,
        {
          Name: UserData.Name,
          Location: UserData.Location,
          Contact: UserData.Contact,
          uid: auth.currentUser.uid,
          Pname: name,
          Pprice: price,
          Pstock: stock,
          UpdatedOn: today,
          Image: UserData.Image,
        },
        {merge: true},
      );
      console.log('Document written with ID: ', UserRef.id);
      await setDoc(
        UserProductRef,
        {
          Name: UserData.Name,
          Location: UserData.Location,
          Contact: UserData.Contact,
          uid: auth.currentUser.uid,
          Pname: name,
          Pprice: price,
          Pstock: stock,
          UpdatedOn: today,
          Image: UserData.Image,
        },
        {merge: true},
      );
      console.log('Document written with ID: ', UserRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    setAddItem(false);
    fetchUserData();
  };

  const Update = async () => {
    try {
      const UserRef = doc(db, 'Users', auth.currentUser.uid);
      const docSnap = await getDoc(UserRef);
      const UserData = docSnap.data();
      const ProductRef = doc(
        db,
        'Products',
        name.toLowerCase(),
        'ShopName',
        auth.currentUser.uid,
      );
      const UserProductRef = doc(
        db,
        'Users',
        auth.currentUser.uid,
        'Products',
        name.toLowerCase(),
      );
      await updateDoc(
        ProductRef,
        {
          Pname: name,
          Pprice: price,
          Pstock: stock,
          UpdatedOn: today,
          Image: UserData.Image,
        },
        {merge: true},
      );
      console.log('Document written with ID: ', UserRef.id);
      await updateDoc(
        UserProductRef,
        {
          Pname: name,
          Pprice: price,
          Pstock: stock,
          UpdatedOn: today,
          Image: UserData.Image,
        },
        {merge: true},
      );
      console.log('Document written with ID: ', UserRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    setEditItem(false);
    fetchUserData();
  };

  useEffect(() => {
    fetchUserData();
    getCurrentDate();
  }, []);

  const fetchUserData = async () => {
    const deta = [];
    const querySnapshot = await getDocs(
      collection(db, 'Users', auth.currentUser.uid, 'Products'),
    );
    querySnapshot.forEach(doc => deta.push(doc.data()));
    setProdData(deta);
  };

  const retrieve = async () => {
    // const UserRef = doc(db, 'Test/UserID/Products/Product Name');
    // const docSnap = await getDoc(UserRef);
    // const help = docSnap.data();
    // console.log(help);
  };

  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    const tdate = date + '-' + month + '-' + year; //format: d-m-y;
    setToday(tdate);
  };

  return (
    <View style={styles.INBody}>
      {/* ADD ITEM */}
      <Modal
        transparent={true}
        visible={addItem}
        onRequestClose={() => setAddItem(false)}>
        <View style={styles.CPModalContainer}>
          <View style={styles.INAddItem}>
            <Text style={styles.INModalTopic}>Add Item</Text>
            <View style={styles.INModalEntCon}>
              <Text style={styles.INModalText}>Product Name:</Text>
              <TextInput
                placeholder="Name"
                style={styles.INModalInput}
                onChangeText={text => setName(text)}
              />
            </View>
            <View style={styles.INModalEntCon}>
              <Text style={styles.INModalText}>Product Price:</Text>
              <TextInput
                placeholder="Price"
                style={styles.INModalInput}
                onChangeText={text => setPrice(text)}
              />
            </View>
            <View style={styles.INModalEntCon}>
              <Text style={styles.INModalText}>Stock Left:</Text>
              <TextInput
                placeholder="Stock"
                style={styles.INModalInput}
                onChangeText={text => setStock(text)}
              />
            </View>

            <TouchableOpacity style={styles.INModalButton} onPress={Add}>
              <Text style={styles.CPModalButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* UPDATE PRODUCT */}
      <Modal
        transparent={true}
        visible={editItem}
        onRequestClose={() => setEditItem(false)}>
        <View style={styles.CPModalContainer}>
          <View style={styles.INAddItem}>
            <Text style={styles.INModalTopic}>Update Item</Text>
            <View style={styles.INModalEntCon}>
              <Text style={styles.INModalText}>Updated Product Name:</Text>
              <TextInput
                placeholder="Name"
                style={styles.INModalInput}
                onChangeText={text => setName(text)}
              />
            </View>
            <View style={styles.INModalEntCon}>
              <Text style={styles.INModalText}>Updated Product Price:</Text>
              <TextInput
                placeholder="Price"
                style={styles.INModalInput}
                onChangeText={text => setPrice(text)}
              />
            </View>
            <View style={styles.INModalEntCon}>
              <Text style={styles.INModalText}>Updated Stock Quantity:</Text>
              <TextInput
                placeholder="Stock"
                style={styles.INModalInput}
                onChangeText={text => setStock(text)}
              />
            </View>
            <TouchableOpacity style={styles.INModalButton} onPress={Update}>
              <Text style={styles.CPModalButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* MAIN */}
      <View style={styles.INContainer}>
        <View style={styles.INHeader}>
          <Ionic name="layers-sharp" size={30} style={styles.INHeaderIcon} />
          <Text style={styles.INHeaderText}>Inventory</Text>
        </View>
        <FlatList
          data={[...prodData, {plusData: true}]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.INItemContainer}
          numColumns={3}
          renderItem={({item}) => {
            if (!item.plusData) {
              return (
                <TouchableOpacity
                  style={styles.INBoxes}
                  onPress={() => setEditItem(true)}>
                  <Text style={styles.INBoxProduct} numberOfLines={1}>
                    {item.Pname}
                  </Text>
                  <View style={styles.INBoxPriceC}>
                    <Text style={styles.INBoxPriceL} numberOfLines={1}>
                      Price :
                    </Text>
                    <Text style={styles.INBoxPrice} numberOfLines={1}>
                      ₹ {item.Pprice}
                    </Text>
                  </View>
                  <View style={styles.INBoxStockC}>
                    <Text style={styles.INBoxStockL} numberOfLines={1}>
                      Stock Left :
                    </Text>
                    <Text style={styles.INBoxStock} numberOfLines={1}>
                      {item.Pstock}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }
            return (
              <TouchableOpacity
                style={styles.INBoxesEnd}
                onPress={() => setAddItem(true)}>
                <View style={styles.INBoxesEndd}>
                  <Ionic name="add" size={55} style={styles.INPlus} />
                  <Text style={styles.INBoxEndText}>Add Item</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}
