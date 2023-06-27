import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import {FlatList} from 'react-native-gesture-handler';
import Ionic from 'react-native-vector-icons/Ionicons';

const SearchFilter = ({data, input, setInput}) => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => {
          if (input != '') {
            return (
              <View style={styles.itemContainer}>
                <View style={styles.shopImageContainer}>
                  <Image style={styles.shopImage} source={item.Image} />
                </View>
                <View style={styles.productDetails}>
                  <View style={styles.HHeader}>
                    <Text style={styles.HProduct} numberOfLines={1}>
                      {item.Pname}
                    </Text>
                    <Text style={styles.HPrice}>₹{item.Pprice}</Text>
                  </View>
                  <View style={styles.shopNameContainer}>
                    <Text style={styles.shopLabel}>Shop:</Text>
                    <Text style={styles.shopName}>{item.Name}</Text>
                  </View>
                  <View style={styles.shopNameContainer}>
                    <Text style={styles.shopLabel}>Stock Left:</Text>
                    <Text style={styles.shopName}>{item.Pstock}</Text>
                  </View>
                  <View style={styles.shopNameContainer}>
                    <Text style={styles.shopLabel}>Contact:</Text>
                    <Text style={styles.shopName}>{item.Contact}</Text>
                  </View>
                  <View style={styles.shopNameContainer}>
                    <Text style={styles.shopLabel}>Updated on:</Text>
                    <Text style={styles.shopName}>{item.UpdatedOn}</Text>
                  </View>
                  <View style={styles.HFooter}>
                    <Ionic
                      name="location"
                      style={styles.searchIcon}
                      size={15}
                    />
                    <Text>{item.Location}</Text>
                  </View>
                </View>
              </View>
            );
          }

          if (input === '') {
            return (
              <View style={styles.itemContainer}>
                <View style={styles.shopImageContainer}>
                  <Image style={styles.shopImage} source={item.Image} />
                </View>
                <View style={styles.productDetails}>
                  <View style={styles.HHeader}>
                    <Text style={styles.HProduct}>{item.Pname}</Text>
                    <Text style={styles.HPrice}>₹ {item.Pprice}</Text>
                  </View>
                  <View style={styles.shopNameContainer}>
                    <Text style={styles.shopLabel}>Shop:</Text>
                    <Text style={styles.shopName}>{item.Name}</Text>
                  </View>
                  <View style={styles.shopNameContainer}>
                    <Text style={styles.shopLabel}>Stock Left:</Text>
                    <Text style={styles.shopName}>{item.Pstock}</Text>
                  </View>
                  <View style={styles.shopNameContainer}>
                    <Text style={styles.shopLabel}>Contact:</Text>
                    <Text style={styles.shopName}>{item.Contact}</Text>
                  </View>
                  <View style={styles.shopNameContainer}>
                    <Text style={styles.shopLabel}>Updated on:</Text>
                    <Text style={styles.shopName}>{item.UpdatedOn}</Text>
                  </View>
                  <View style={styles.HFooter}>
                    <Ionic
                      name="location"
                      style={styles.searchIcon}
                      size={15}
                    />
                    <Text>{item.Location}</Text>
                  </View>
                </View>
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchFilter;
