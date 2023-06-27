import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import {styles} from './Styles';
import {TextInput} from 'react-native-gesture-handler';
import SearchFilter from './SearchFilter';
import {collection, getDoc, getDocs} from 'firebase/firestore';
import {db} from './firebasecon';

export default function Home() {
  const [input, setInput] = useState('');
  const [Data, setData] = useState([
    {
      Contact: '123456778',
      Location: 'Helo',
      Image: {
        uri: 'https://vrchennai.com/UploadFile/storeImageGallery/casio-1.jpg',
      },
      Name: 'ALL SHOP',
      Pname: 'Mobile',
      Pprice: '234',
      Pstock: '323',
      uid: 'egpqVlmpB2RatoBJBjAkc5QU2jo2',
    },
    {
      Pname: 'Pencil',
      Pprice: 10,
      Pstock: 23,
      Name: 'AllMart',
      Image: require('./Images/ShopPics/FamilyMart.jpg'),
      Location: 'VIT,Vellore',
      Contact: '9238156932',
      Update: '19/07/23',
    },
    {
      Pname: 'Eraser',
      Pprice: 5,
      Pptock: 15,
      Image: require('./Images/ShopPics/ToyShop.jpg'),
      Name: 'Toy Shop',
      Location: 'katpadi,Vellore',
      Contact: '8745726763',
      Update: '15/09/23',
    },
    {
      Pname: 'xxx',
      Pprice: 90,
      Pptock: 30,
      Name: 'HepMall',
      Image: require('./Images/ShopPics/ToyShop.jpg'),
      Location: 'New bus stand, Vellore',
      Contact: '7894629138',
      Update: '12/03/23',
    },
  ]);
  const Update = async () => {
    try {
      if (input != '') {
        const deta = [];
        const querySnapshot = await getDocs(
          collection(db, 'Products', input.toLowerCase(), 'ShopName'),
        );
        console.log(querySnapshot);
        querySnapshot.forEach(doc => deta.push(doc.data()));
        setData(deta);
      } else if (input === '') {
        setData([
          {
            Contact: '123456778',
            Location: 'Helo',
            Image: require('./Images/ShopPics/StationeryShop.jpg'),
            Name: 'ALL SHOP',
            Pname: 'Mobile',
            Pprice: '234',
            Pstock: '323',
            uid: 'egpqVlmpB2RatoBJBjAkc5QU2jo2',
          },
          {
            Pname: 'Pencil',
            Pprice: 10,
            Pstock: 23,
            Name: 'AllMart',
            Image: require('./Images/ShopPics/FamilyMart.jpg'),
            Location: 'VIT,Vellore',
            Contact: '9238156932',
            Update: '19/07/23',
          },
          {
            Pname: 'Eraser',
            Pprice: 5,
            Pptock: 15,
            Image: require('./Images/ShopPics/ToyShop.jpg'),
            Name: 'Toy Shop',
            Location: 'katpadi,Vellore',
            Contact: '8745726763',
            Update: '15/09/23',
          },
          {
            Pname: 'xxx',
            Pprice: 90,
            Pptock: 30,
            Name: 'HepMall',
            Image: require('./Images/ShopPics/ToyShop.jpg'),
            Location: 'New bus stand, Vellore',
            Contact: '7894629138',
            Update: '12/03/23',
          },
        ]);
      }
      console.log(Data);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  // useEffect(() => {
  //   fetchProductData();
  // }, []);

  // const fetchProductData = async () => {
  //   const docSnap = await getDoc(ProductRef);
  //   const help = docSnap.data();
  //   setUserData(help);
  // };
  const test = () => {
    console.log(input);
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={input}
          onChangeText={text => setInput(text)}
        />
        <TouchableOpacity onPress={Update}>
          <Ionic name="search" style={styles.searchIcon} size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.itemsArea}>
        <SearchFilter data={Data} input={input} setInput={setInput} />
      </View>
    </View>
  );
}
