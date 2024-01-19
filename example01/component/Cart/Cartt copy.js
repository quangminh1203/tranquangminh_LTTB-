import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Test3 from "../Test3";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";
import { useCart } from "./SaveCart";
function Cartt({route}) {
  const { quantity1 } = route.params;
  const { cartItems, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(quantity1); // Số lượng mặc định là 1

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.vo}>
        <View>
          <Image
            style={styles.ic}
            source={require("../../assets/screenns/arrow-left.png")}
          ></Image>
        </View>
        <View style={styles.ib}>
          <Text style={styles.txt}>Shopping Bag</Text>
        </View>
        <View style={styles.ib}>
          <Image
            style={styles.ic}
            source={require("../../assets/screenns/shopping-bag.png")}
          ></Image>
        </View>
      </View>
      <View style={styles.a1}>
      <FlatList
        style={styles.a}
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.sp}>
            <View style={styles.container1}>
              <View style={styles.khungsp}>
                <Image style={styles.anh} source={{ uri: item.anh }} />
              </View>
            </View>

            <View style={styles.tsl}>
              <View style={styles.kchu}>
                <Text style={styles.ten}>{item.name}</Text>
                <Text>{item.price}</Text>
              </View>
              <View style={styles.btn1}>
                <TouchableOpacity onPress={decreaseQuantity}>
                  <View style={styles.ss}>
                    <Text>-</Text>
                  </View>
                </TouchableOpacity>
                <View style={{ marginRight: 20 }}>
                  <Text>{quantity}</Text>
                </View>

                <TouchableOpacity onPress={increaseQuantity}>
                  <View style={styles.ss}>
                    <Text>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.tsl1}>
              <View style={styles.s}>
                <Text style={{ color: "#fff" }}>{item.size}</Text>
              </View>
              <TouchableOpacity
                style={styles.ib1}
                onPress={() => removeFromCart(item)}
              >
                <Image
                  style={styles.ic}
                  source={require("../../assets/screenns/trash-2.png")}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.hr}></View>
      <View style={styles.gg}>
        <Text style={{ left: -60 }}>Prama Code</Text>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
      <View style={styles.hr1}></View>
      <View style={styles.phi}>
        <View style={styles.phic}>
          <Text style={styles.ch1}>Sub Total</Text>
          <Text style={styles.t}>$86.00</Text>
        </View>
        <View style={styles.phic}>
          <Text style={styles.ch1}>Shipping </Text>
          <Text style={styles.t}> $6.00</Text>
        </View>
        <View style={styles.phic}>
          <Text style={styles.ch}>Bag Total</Text>
          <Text style={styles.tt}>$90.00</Text>
        </View>
      </View>
      <View style={styles.gg1}>
        <Text style={{ fontWeight: "700", color: "#FFF" }}>
          Proceed to Checkout
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    top: 30,
    padding: 40,
    backgroundColor: "#FFF",
  },
  vo: {
    backgroundColor: "#FFF",
    flexDirection: "row",
  },
  tsl: {
    flexDirection: "column",
    marginLeft: 30,
  },
  tsl1: {
    flexDirection: "column",
    marginLeft: 55,
  },
  ib: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 55,
  },
  ib1: {
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    left: -10,
  },
  ic: {
    width: 35,
    height: 35,
  },

  txt: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
  },
  txt1: {
    color: "black",
    fontSize: 24,
    fontWeight: "700",
  },
  container1: {
    width: 76,
    height: 85,

    backgroundColor: "#fff",
  },
  khungsp: {
    height: 85,
    width: 76, // Điều chỉnh kích thước của mỗi sản phẩm
    borderRadius: 15,
    overflow: "hidden",
  },
  anh: {
    width: 76, // Điều chỉnh kích thước ảnh
    height: 85,
  },
  kchu: {
    left: 10,
  },
  ten: {
    fontSize: 16,
  },
  sp: {
    top: 50,
    flexDirection: "row",

    marginTop: 20,
  },
  btn1: {
    left: 10,
    top: 10,
    flexDirection: "row",
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center", // Canh chữ theo chiều ngang giữa khung
  },
  ss: {
    width: 30,
    height: 30,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    borderRadius: 15,
  },
  s: {
    width: 30,
    height: 30,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    borderRadius: 15,
  },
  hr: {
    marginTop: 80,
    height: 1,
    width: "100%",
    backgroundColor: "black",
  },
  hr1: {
    marginTop: 10,
    height: 1,
    width: "100%",
    backgroundColor: "black",
  },
  btn: {
    width: 100,
    height: 40,
    borderRadius: 10,
    textAlign: "center",
    borderWidth: 1, // Đặt độ rộng của viền
    borderColor: "#FFF", // Đặt màu của viền
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center", // Canh chữ theo chiều ngang giữa khung
    backgroundColor: "#42D1F0",
    left: 60,
  },

  button: {
    backgroundColor: "transparent",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
  gg: {
    backgroundColor: "#ccc",
    flexDirection: "row",
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center", // Canh chữ theo chiều ngang giữa khung
    borderRadius: 20,
    marginTop: 20,
    height: 55,
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
  phi: {
    marginTop: 0,
    flexDirection: "column",
  },
  phic: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 20,
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center", // Canh chữ theo chiều ngang giữa khung
  },
  t: {
    right: -80,
    fontSize: 20,
    fontWeight: "700",
    color: "black",
  },
  tt: {
    right: -80,
    fontSize: 30,
    fontWeight: "700",
    color: "#FF937B",
  },
  ch: {
    left: -60,
  },
  ch1: {
    left: -80,
  },
  a: {
    backgroundColor: "#fff",
  },
  a1: {
    height: 465,
  },
  
  tsl: {
    flexDirection: "column",
    marginLeft: 30,
  },
  tsl1: {
    flexDirection: "column",
    marginLeft: 55,
  },
  ib: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 55,
  },
  ib1: {
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    left: -10,
  },
  ic: {
    width: 35,
    height: 35,
  },

  txt: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
  },
  txt1: {
    color: "black",
    fontSize: 24,
    fontWeight: "700",
  },
  container1: {
    left: 10,
    width: 76,
    height: 85,
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center",
  },
  khungsp: {
    height: 85,
    width: 76, // Điều chỉnh kích thước của mỗi sản phẩm
    borderRadius: 15,
    backgroundColor: "black",
    overflow: "hidden",
  },
  anh: {
    width: 76, // Điều chỉnh kích thước ảnh
    height: 85,
  },
  kchu: {
    left: 10,
  },
  ten: {
    fontSize: 16,
  },
  sp: {
    left: -10,
    top: 0,
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 20,
  },
  btn1: {
    left: 10,
    top: 10,
    flexDirection: "row",
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center", // Canh chữ theo chiều ngang giữa khung
  },
  ss: {
    width: 30,
    height: 30,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    borderRadius: 15,
  },
  s: {
    width: 30,
    height: 30,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    borderRadius: 15,
  },
  hr: {
    marginTop: 0,
    height: 1,
    width: "100%",
    backgroundColor: "black",
  },
 
  btn: {
    width: 100,
    height: 40,
    borderRadius: 10,
    textAlign: "center",
    borderWidth: 1, // Đặt độ rộng của viền
    borderColor: "#FFF", // Đặt màu của viền
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center", // Canh chữ theo chiều ngang giữa khung
    backgroundColor: "#42D1F0",
    left: 60,
  },

 
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
  gg: {
    backgroundColor: "#ccc",
    flexDirection: "row",
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center", // Canh chữ theo chiều ngang giữa khung
    borderRadius: 20,
    marginTop: 10,
    height: 55,
  },
});
export default Cartt;
