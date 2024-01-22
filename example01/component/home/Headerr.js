import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function Headerr() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.vo}>
        <View style={styles.kavt}>
          
        </View>
        <View style={styles.ib}>
          <Text style={styles.txt}>Xin chào!</Text>
        </View>
        <TouchableOpacity style={styles.ib1}
        onPress={() => {
          navigation.navigate("Cartt"); // Chuyển đến trang chủ khi nhấn vào nút "Continue Shopping"
        }}>
          <Image
            style={styles.ic}
            source={require("../../assets/screenns/shopping-bag.png")}
          ></Image>
        </TouchableOpacity>
      </View>
     
    </View>
  );
}
const styles = StyleSheet.create({
  vo: {
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
    left: 80,
  },
  kavt: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 35,
    borderRadius: 30,
    borderWidth: 1, // Đặt độ rộng của viền
    borderColor: "#CCC", // Đặt màu của viền
    overflow: "hidden",
  },
  avt: {
    width: 60,
    height: 60,
  },
  txt: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
  },
  txt1: {
    color: "black",
    fontSize: 24,
    fontWeight: "700",
  },
  ar: {
    width: 225,
    height: 90,
    left: 35,
    top: 30,
  },
});
export default Headerr;
