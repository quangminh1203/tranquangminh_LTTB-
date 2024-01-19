import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../Home/Headerr';

const Productdetail = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]); // Di chuyển state vào đây

  const handleAddToCart = async () => {
    try {
      const existingCart = await AsyncStorage.getItem('cart');
      const existingCartArray = existingCart ? JSON.parse(existingCart) : [];
      const existingProduct = existingCartArray.find((product) => product.id === item.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        existingCartArray.push({ ...item, quantity: 1 });
      }

      await AsyncStorage.setItem('cart', JSON.stringify(existingCartArray));
      setCartItems(existingCartArray); // Cập nhật state
      Alert.alert('Thông báo', `Đã thêm sản phẩm ${item.title} vào giỏ hàng !`);
    } catch (error) {
      console.error('Lỗi khi thêm vào giỏ hàng:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price} USD</Text>
        <TouchableOpacity onPress={handleAddToCart} style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
   
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  image: {
    bottom: 25,
    width: 350,
    height: 400,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    color: '#007BFF',
    marginTop: 10,
  },
  backButton: {
    position: 'absolute',
    top: 150,
    left: 10,
    padding: 10,
    zIndex: 1,
    
  },
  backButtonText: {
    fontSize: 16,
    color: '#007BFF',
    bottom: 130,
    fontWeight: 'bold',

  },
  addToCartButton:{
    backgroundColor: '#b6d6ba',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});

export default Productdetail;
