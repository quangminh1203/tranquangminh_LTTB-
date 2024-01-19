import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-elements";
import axios from "axios"; // Import the axios library
import {GET_IMG } from "../Api/apiService";
function Sreach() {
  const [searchText, setSearchText] = useState(""); // State to store the search text
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  // Function to handle text input changes and make the API request
  const handleSearch = async (text) => {
    setSearchText(text);
  };

  // Function to handle search button press
  const handleSearchButtonPress = async () => {
    try {
      // Make an API request to search products
      const response = await axios.get(
        `http://192.168.1.6:8080/api/products/search?keyword=${searchText}`
      );

      // Update the searchResults state with the response data
      setSearchResults(response.data.content);

      console.log("Search results:", response.data);
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };

  return (
    <View style={styles.dau}>
    <View style={styles.vo}>
      <View style={styles.container1}>
        <SearchBar
          placeholder="Tìm kiếm..."
          containerStyle={{
            backgroundColor: "#fff",
            width: 350,
            borderBottomColor: "transparent",
            borderTopColor: "transparent",
          }}
          inputContainerStyle={{
            backgroundColor: "#ccc",
            height: 50,
            borderRadius: 15,
          }}
          onChangeText={handleSearch} // Specify the onChangeText prop to capture text input
          value={searchText} // Pass the state value as the value prop
        />
      </View>
      <TouchableOpacity onPress={handleSearchButtonPress}>
        <Text style={{ padding: 10, backgroundColor: "blue", color: "white" }}>Tìm kiếm</Text>
      </TouchableOpacity>
      
    </View>
    <View>
     
        <FlatList
          data={searchResults}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
            style={styles.gg1}
            onPress={() => {
              navigation.navigate("ProductDetail", { item}); // Chuyển đến trang chủ khi nhấn vào nút "Continue Shopping"
            }}
          >
            <View style={styles.container}>
              <View style={styles.khungsp}>
                <Image style={styles.anh} source={{ uri: GET_IMG("products", item.photo)}} />
              </View>
              <View style={styles.kheart}>
                <Image
                  style={styles.heart}
                  source={require("../../assets/screenns/heart.png")}
                />
              </View>
              <View style={styles.kchu}>
                <Text style={styles.ten}>{item.title}</Text>
                <Text>{item.price} e44r</Text>
              </View>
            </View>
          </TouchableOpacity>
        
          )}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  dau: {
    backgroundColor: "red",
    // flexDirection: "column",
  },
  vo: {
    backgroundColor: "#FFF",
    flexDirection: "row",
  },
  container1: {
    width: 300,
    left: 25,
  },
  container: {
    width: 185,
    height: 310,
    marginTop: 10,
    marginLeft:10,
    backgroundColor: "#fff",
  },
  khungsp: {
    height: 258,
    width: 185, // Điều chỉnh kích thước của mỗi sản phẩm
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#ccc",
  },
  anh: {
    width: 185, // Điều chỉnh kích thước ảnh
    height: 258,
  },
  container1: {
    marginTop: 10,
    height: 260,
    width: 185, // Điều chỉnh kích thước của mỗi sản phẩm
    backgroundColor: "#FFF",
    marginLeft: 10,
  },
  container2: {
    top: -15,
    height: 260,
    width: 185, // Điều chỉnh kích thước của mỗi sản phẩm
    backgroundColor: "#FFF",
    marginLeft: 10,
  },
  khungsp1: {
    height: 218,
    width: 185, // Điều chỉnh kích thước của mỗi sản phẩm
    backgroundColor: "#ccc",
    borderRadius: 15,
    overflow: "hidden",
  },
  anh1: {
    width: 185, // Điều chỉnh kích thước ảnh
    height: 218,
  },
  ten: {
    paddingTop: 4,
    fontSize: 16,
    // textAlign: "center",
  },
  kheart: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    top: -250,
    left: 130,
  },
  kheart1: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    top: -210,
    left: 130,
  },
  kchu: {
    top: -40,
  },

});

export default Sreach;
