import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
function Search() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState(""); // State to store the search text

  // Function to handle text input changes
  const handleSearch = (text) => {
    setSearchText(text);
    // You can perform any search-related logic here based on the input text
  };

  return (
    <TouchableOpacity style={styles.vo}  onPress={() => {
      navigation.navigate("HomePage1"); 
    }}>
      <View style={styles.container}>
        <SearchBar
          placeholder="Tìm kiếm..."
          containerStyle={{
            backgroundColor: "#fff",
            width: 390,
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
      <View style={styles.ib}>
        <Image
          style={styles.ic}
          source={require("../../assets/sliders.png")}
        ></Image>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  vo: {
    backgroundColor: "#FFF",
    flexDirection: "row",
  },
  container: {
    width: 300,
    left: 15,
  },
  ib: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
  ic: {
    width: 35,
    height: 35,
  },
});

export default Search;
