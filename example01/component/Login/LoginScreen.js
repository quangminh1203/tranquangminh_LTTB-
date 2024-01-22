import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Animated,
  Easing
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fadeAnim] = useState(new Animated.Value(0));
//
const startAnimationTimeout = setTimeout(() => { Animated.timing(fadeAnim, {
  toValue: 1,
  duration: 1000,
  easing: Easing.linear,
  useNativeDriver: true,
  }).start();
  }, 500);

  const handleLogin = async () => {
    try {
      if (username !== "" && password !== "") {
        const response = await fetch("https://fakestoreapi.com/users");
        const users = await response.json();

        const user = users.find(
          (u) => u.username === username && u.password === password
        );

        if (user) {
          // Lưu trạng thái đăng nhập vào AsyncStorage
          await AsyncStorage.setItem("isLoggedIn", "true");

          // Chuyển hướng đến màn hình Home
          navigation.navigate("HomePage");
        } else {
          Alert.alert("Đăng nhập sai!!");
        }
      } else {
        Alert.alert("Vui lòng nhập tài khoản và mật khẩu");
      }
    } catch (error) {
      console.error("Error fetching user data", error);
      Alert.alert("Đã xảy ra lỗi khi đăng nhập");
    }
  };

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
        <Text style={styles.login}>Login</Text>
        <View style={styles.texta}>
          <Text style={styles.mauchu}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email hoặc tên tài khoản"
            keyboardType="default"
            value={username}
            onChangeText={setUsername}
          />
          <Text style={styles.mauchu}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Email hoặc tên tài khoản"
            keyboardType="default"
            value={password}
        onChangeText={setPassword}
          />
          <Text style={styles.mauchu1}>Forgot Password?</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.khungicon}>
              <Image
                source={require("../../assets/screenns/flat-color-icons_google.png")}
              ></Image>
            </View>
            <View style={styles.khungicon}>
              <Image
                source={require("../../assets/screenns/logos_facebook.png")}
              ></Image>
            </View>
            <View style={styles.khungicon}>
              <Image
                source={require("../../assets/screenns/ant-design_apple-filled.png")}
              ></Image>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.img4, styles.test, { flexDirection: "row" }]}>
        <Text style={styles.test1}>New Here? </Text>
        <TouchableOpacity
        style={styles.gg1}
        onPress={() => {
          navigation.navigate("RegisterScreen"); // Chuyển đến trang chủ khi nhấn vào nút "Continue Shopping"
        }}
      >
       <Text style={styles.test2}>Register</Text>
      </TouchableOpacity>
        
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={handleLogin}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
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
  login: {
    width: 338,
    height: 67,
    top: 396,
    left: 21,
    alignItems: "center",
    fontSize: 45,
    fontWeight: "bold",
    color: "#2F80ED",
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    top: 0,
    right: 19,
    borderRadius: 10,
    borderColor: "#2F80ED",
  },
  texta: {
    top: 410,
    left: 25,
  },
  mauchu: {
    color: "#2F80ED",
    fontSize: 14,
    fontStyle: "normal",
  },
  mauchu1: {
    left: 217,
    color: "#2F80ED",
    fontSize: 14,
    fontStyle: "normal",
  },
  khungicon: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    borderWidth: 1, // Đặt độ rộng của viền
    borderColor: "#FFF", // Đặt màu của viền
    marginRight: 20,
  },
  test: {
    top: 776,
    left: 30,
  },
  test1: {
    fontSize: 14,
    fontStyle: "normal",
    color: "#FFF",
  },
  test2: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default Login;