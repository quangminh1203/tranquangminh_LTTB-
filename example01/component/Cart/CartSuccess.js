import React, { useState } from "react";
import { useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";
import { useNavigation } from "@react-navigation/native";

function CartSuccess() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.vo}>
        <View>
          <Image
            style={styles.ic}
            source={require("../../assets/screenns/arrow-left.png")}
          ></Image>
        </View>
      </View>

      <View style={styles.tc}>
      <Image
        source={require('../../assets/anima.gif')}
        style={{width: 200, height: 200}}
        resizeMode='cover'
      />
        <View style={styles.ktxt}>
          <Text style={styles.txt}>
            Payment Done Successfully and your order has been placed.
          </Text>
        </View>
      </View>
      <View style={styles.ktich}>
        {/* <Image
          style={styles.anh1}
          source={require("../../assets/screenns/tich.png")}
        ></Image> */}
      </View>
      <TouchableOpacity style={styles.gg2}
          onPress={() => {
            navigation.navigate("HomePage"); // Chuyển đến trang chủ khi nhấn vào nút "Continue Shopping"
          }}>
        <Text style={{ fontWeight: "700", color: "#FF937B" }}>
          View Order Details
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.gg1}
        onPress={() => {
          navigation.navigate("HomePage"); // Chuyển đến trang chủ khi nhấn vào nút "Continue Shopping"
        }}
      >
        <Text style={styles.buttonText}>Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    top: 30,
    padding: 50,
    backgroundColor: "#FFF",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "700",
  },
  vo: {
    backgroundColor: "#FFF",
    flexDirection: "row",
  },

  ic: {
    width: 35,
    height: 35,
  },
  gg2: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center", // Canh chữ theo chiều ngang giữa khung
    borderRadius: 20,
    marginTop: 20,
    height: 50,
    borderWidth: 1, // Đặt độ rộng của viền
    borderColor: "#FF937B",
  },

  gg1: {
    backgroundColor: "#FF937B",
    flexDirection: "row",
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center", // Canh chữ theo chiều ngang giữa khung
    borderRadius: 20,
    marginTop: 20,
    height: 50,
  },
  tc: {
    height: 400,
    flexDirection: "column",
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center",
  },
  ktxt: {
    marginTop: 10,
    width: 248,
    height: 74,
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center",
  },
  txt: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  anh: {
    width: 120,
    height: 120,
  },
  ktich: {
    width: 80,
    height: 110,
   
  },
});
export default CartSuccess;
