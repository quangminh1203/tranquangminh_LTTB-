import React,{useState,useEffect} from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing
} from "react-native";
import { useNavigation } from "@react-navigation/native";
function LoginStart() {
  const navigation = useNavigation();
  const [fadeAnim] = useState(new Animated.Value(0));
  useEffect(() => {
  const startAnimationTimeout = setTimeout(() => { Animated.timing(fadeAnim, {
  toValue: 1,
  duration: 1000,
  easing: Easing.linear,
  useNativeDriver: true,
  }).start();
  }, 500);
  return () => clearTimeout(startAnimationTimeout)
  }, []);
  return (
    <Animated.View style={[styles.cap,{opacity:fadeAnim}]}>
      <View style={styles.img1}>
        <Image
          style={styles.img2}
          source={require("../../assets/screenns/Rectangle2.png")}
        ></Image>
        <Image
          style={styles.img2}
          source={require("../../assets/screenns/Rectangle1.png")}
        ></Image>
        <View style={styles.img3}>
          <Image
            source={require("../../assets/screenns/Rectangle3.png")}
          ></Image>
        </View>
      </View>
      <View style={styles.img4}>
        <Image
          source={require("../../assets/screenns/ls_yapcasialogomark.png")}
        ></Image>
        <View style={styles.khung}>
          <Text style={styles.txt1}>Xin chào</Text>
          <Text style={styles.txt2}>Vui lòng đăng nhập để mua sắm</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate("LoginScreen"); // Chuyển đến trang chủ khi nhấn vào nút "Continue Shopping"
        }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  cap: {
    top: -135,
  },
  img1: {
    position: "relative",
    height: 821,
  },
  img2: {
    position: "absolute",
    top: 0,
  },
  img3: {
    position: "absolute",
    bottom: 0,
  },
  img4: {
    position: "absolute",
    top: 412,
    left: 59,
  },
  btn: {
    width: 144,
    height: 60,
    position: "absolute",
    top: 730,
    left: 230,
    borderRadius: 10,
    textAlign: "center",
    borderWidth: 1, // Đặt độ rộng của viền
    borderColor: "#FFF", // Đặt màu của viền
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center", // Canh chữ theo chiều ngang giữa khung
    backgroundColor: "#2F80ED",
  },
  button: {
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  khung: {
    width: 192,
    height: 109,
  },
  txt2: {
    fontSize: 24,
    fontStyle: "normal",
    color: "rgba(47, 128, 237, 0.70)",
  },
  txt1: {
    fontSize: 36,
    fontStyle: "normal",
    color: "rgba(47, 128, 237, 0.70)",
  },
});

export default LoginStart;
