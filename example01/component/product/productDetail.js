// Productdetail
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../home/footer';

const Productdetail = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price} USD</Text>
        <Button title="Thêm vào giỏ hàng" onPress={() => addToCart(item)} />
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      
      <Footer  />
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
    width: 200,
    height: 250,
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
    top: 30,
    left: 10,
    padding: 10,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007BFF',
  },
});

export default Productdetail;