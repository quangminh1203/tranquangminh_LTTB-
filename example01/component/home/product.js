import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const responseData = await response.json();
        if (Array.isArray(responseData)) {
          setProducts(responseData);
        } else {
          console.error("Data received from the API is not in a supported format.");
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error: ", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const navigateToProductDetail = (item) => {
    navigation.navigate("productDetail", { item });
  };

  const renderGridItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tất cả sản phẩm</Text>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {data.map((item) => (
          <View key={item.id} style={styles.gridItem}>
            {renderGridItem({ item })}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%",
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  itemText: {
    textAlign: "center",
    fontSize: 16,
  },
  price: {
    textAlign: "center",
    fontSize: 14,
    color: "gray",
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default Product;