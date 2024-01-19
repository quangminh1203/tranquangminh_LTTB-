import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import MenuHome from "./MenuHome";
import Sreach1 from "./Search1";
import Product from "./Product";
import Headerr from "./Headerr";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Headerr />
        <Sreach1 />
      </View>
      <View style={styles.productsContainer}>
        <Product />
      </View>
      <View style={styles.menu}>
        <MenuHome />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  cc: {
    height: 100,
  },
  search: {
    backgroundColor: "#FFFFFF",
    paddingTop: 30,
  },
  menu: {
    backgroundColor: "#FFFFFF",
    paddingTop: 30,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  productsContainer: {
    flex: 1,
    paddingHorizontal: 10,
    top: -5,
    paddingBottom: 50,
  },
});

export default HomePage;
