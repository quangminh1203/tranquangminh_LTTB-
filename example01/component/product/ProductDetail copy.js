import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../Cart/SaveCart";
function ProductDetail({ route }) {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1); // Số lượng mặc định là 1
  const { item } = route.params;
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const { addToCart } = useCart();

  
  const product = { id:item.id, name:item.ten, price:item.price,anh:item.imageUrl,sl:quantity}
  const handleAddToCart = () => {
    addToCart(product);
    navigation.navigate("Cartt",{ quantity1: quantity });
  };
  return (
    <View style={styles.ctt}>
      <View style={styles.ct}>
        <View style={styles.khungsp}>
          <Image style={styles.anh} source={{ uri: item.imageUrl }} />
        </View>
        <View style={styles.kheart}>
          <Image
            style={[styles.heart]}
            source={require("../../assets/screenns/heart.png")}
          />
        </View>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            navigation.navigate("HomePage"); // Chuyển đến trang chủ khi nhấn vào nút "Continue Shopping"
          }}
        >
          <Image
            style={[styles.heart]}
            source={require("../../assets/screenns/arrow-left.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.kchu}>
        <Text style={styles.txt}>{item.ten}</Text>
        <Text style={styles.gia}>{item.price}</Text>
      </View>
      
      <View
        style={{
          flexDirection: "row",
          marginRight: 100,
          left: 25,
          paddingBottom: 8,
          paddingTop: 20,
          backgroundColor: "#fff",
        }}
      >
        <Text style={{ marginRight: 150 }}>Color</Text>
        <Text style={{}}>Size</Text>
      </View>

      <View style={styles.chon}>
        <View style={styles.color}>
          <View style={styles.m1}></View>
          <View style={styles.m2}></View>
          <View style={styles.m3}></View>
        </View>
        <View style={styles.color1}>
          <View style={styles.s}>
            <Text>S</Text>
          </View>
          <View style={styles.s}>
            <Text>M</Text>
          </View>
          <View style={styles.s}>
            <Text>L</Text>
          </View>
        </View>
      </View>
      <View style={styles.khft}>
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
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.button}
            onPress={
              
              handleAddToCart
            }
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  ct: {
    height: 522,
    // Điều chỉnh kích thước của mỗi sản phẩm
    borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  ctt: {
    backgroundColor: "#fff",
    marginTop: 30,
    height: 922,
  },
  khungsp: {
    height: 522,
    width: 385, // Điều chỉnh kích thước của mỗi sản phẩm
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "blue",
    top: 50,
  },
  anh: {
    width: 385, // Điều chỉnh kích thước ảnh
    height: 522,
  },
  kheart: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    top: -470,
    left: 150,
  },
  back: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    top: -510,
    left: -160,
  },
  kchu: {
    backgroundColor: "#fff",
    flexDirection: "row",
    top: 10,
    left: 25,
  },
  txt: {
    fontSize: 20,
    fontWeight: "700",
  },
  gia: {
    fontSize: 24,
    fontWeight: "700",
    left: 40,
  },
  si: {
    fontSize: 12,
    fontWeight: "500",
    paddingTop: 10,
    left: 25,
  },
  chon: {
    flexDirection: "row",
    backgroundColor: "#fff",
    left: 20,
  },
  color: {
    flexDirection: "row",
  },
  m1: {
    width: 30,
    height: 30,
    backgroundColor: "blue",
    marginRight: 10,
    borderRadius: 15,
  },
  m2: {
    width: 30,
    height: 30,
    backgroundColor: "black",
    marginRight: 10,
    borderRadius: 15,
  },
  m3: {
    width: 30,
    height: 30,
    backgroundColor: "pink",
    marginRight: 10,
    borderRadius: 15,
  },
  color1: {
    flexDirection: "row",
    left: 65,
  },
  s: {
    width: 30,
    height: 30,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    borderRadius: 15,
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
  btn: {
    width: 144,
    height: 50,
    borderRadius: 20,
    textAlign: "center",
    borderWidth: 1, // Đặt độ rộng của viền
    borderColor: "#FFF", // Đặt màu của viền
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center", // Canh chữ theo chiều ngang giữa khung
    backgroundColor: "#FF937B",
    left: 80,
  },
  btn1: {
    flexDirection: "row",
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center", // Canh chữ theo chiều ngang giữa khung
  },
  button: {
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
  khft: {
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "#fff",
    top: 630,
    left: 25,
  },
});
export default ProductDetail;
