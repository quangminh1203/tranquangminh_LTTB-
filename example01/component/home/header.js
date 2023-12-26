import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


function Header() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.vo}>
        <View style={styles.ib}>
          <Text style={styles.txt}>Xin chào</Text>
        </View>
        <TouchableOpacity
          style={styles.ib1}
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <Image
            style={styles.ic}
            source={require("../../assets/image/shopping-bag.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.ar}>
        <Text style={styles.txt1}>Tìm kiếm sản phẩm bạn mà bạn muốn</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  vo: {
    backgroundColor: "#FFF",
    flexDirection: "row",
  },
  container: {
    width: "70%",
    backgroundColor: "#FFF",
  },
  ib: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
  ib1: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 150,
  },
  ic: {
    width: 35,
    height: 35,
    top: 40,
    left: 70,
  },
  kavt: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 35,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#CCC",
    overflow: "hidden",
  },
  avt: {
    width: 60,
    height: 60,
  },
  txt: {
    flex: 1,
    color: "black",
    fontSize: 26,
    fontWeight: "500",
    top: 40,
    
  },
  txt1: {
    color: "black",
    fontSize: 24,
    fontWeight: "700",
  },
  ar: {
    fontSize: 20,
    width: 225,
    height: 90,
    left: 35,
    top: 60,
  },
});

export default Header
