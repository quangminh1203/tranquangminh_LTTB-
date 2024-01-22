import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
function MenuHome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.cap}>
        <TouchableOpacity style={styles.menu}
          onPress={() => {
            navigation.navigate("HomePage"); 
          }}>
          <Image
            style={styles.ic}
            source={require("../../assets/screenns/home.png")}
          ></Image>
          <Text style={styles.txt}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}
           onPress={() => {
            navigation.navigate("Searchread"); // Chuyển đến trang chủ khi nhấn vào nút "Continue Shopping"
          }}>
          <Image
            style={styles.ic}
            source={require("../../assets/screenns/search.png")}
          ></Image>
          <Text style={styles.txt}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu}
          onPress={() => {
            navigation.navigate("RegisterScreen"); // Chuyển đến trang chủ khi nhấn vào nút "Continue Shopping"
          }}>
          <Image
            style={styles.ic}
            source={require("../../assets/screenns/heart.png")}
          ></Image>
          <Text style={styles.txt}>Liked</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}
          onPress={() => {
            navigation.navigate("profile"); // Chuyển đến trang chủ khi nhấn vào nút "Continue Shopping"
          }}>
          <Image
            style={styles.ic}
            source={require("../../assets/screenns/user.png")}
          ></Image>
          <Text style={styles.txt}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 630,
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 60,
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center", // Căn giữa theo chiều ngang
  },
  cap: {
    flexDirection: "row",
  },
  menu: {
    flex: 1,
    marginLeft: 30,
  },
  ic: {
    width: 18,
    height: 20,
    tintColor: "black",
  },
  txt: {
    left: -6,
    fontSize: 12,
  },
});

export default MenuHome;
