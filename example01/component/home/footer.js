import React from "react";
import {View,Text,Image,TextInput,Button,StyleSheet,TouchableOpacity,} from "react-native";
function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.cap}>
        <TouchableOpacity style={styles.menu}
       >
          <Image
            style={styles.ic}
            source={require("../../assets/home.png")}
          ></Image>
          <Text style={styles.txt}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menu}>
        
          <Image
            style={styles.ic}
            source={require("../../assets/search.png")}
          ></Image>
          <Text style={styles.txt}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu}
          >
          <Image
            style={styles.ic}
            source={require("../../assets/heart.png")}
          ></Image>
          <Text style={styles.txt}>Liked</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}
         >
          <Image
            style={styles.ic}
            source={require("../../assets/user.png")}
          ></Image>
          <Text style={styles.txt}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 762,
    backgroundColor: "white",
    width: "100%",
    height: 50,
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

export default Footer;
