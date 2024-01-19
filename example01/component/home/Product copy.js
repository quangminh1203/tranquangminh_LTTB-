import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Product = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    // Gọi API để lấy danh sách sản phẩ
    // fetch("https://api.npoint.io/4074693582e2d75c418b")
    fetch("http://192.168.106.68:8080/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.content))
      .catch((error) => console.error("Lỗi khi lấy dữ liệu sản phẩm:", error));
  }, []);

  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => {
        let content;
        if (item.id % 2 !== 0) {
          // Nếu item.id là số chẵn
          content = (
            <TouchableOpacity
              style={styles.gg1}
              onPress={() => {
                navigation.navigate("ProductDetail", { item}); // Chuyển đến trang chủ khi nhấn vào nút "Continue Shopping"
              }}
            >
              <View style={styles.container}>
                <View style={styles.khungsp}>
                  <Image style={styles.anh} source={{ uri: item.photo}} />
                </View>
                <View style={styles.kheart}>
                  <Image
                    style={styles.heart}
                    source={require("../../assets/screenns/heart.png")}
                  />
                </View>
                <View style={styles.kchu}>
                  <Text style={styles.ten}>{item.title}</Text>
                  <Text>{item.price} ee1</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }
        if (item.id % 2 === 0 && item.id == 2) {
          // Nếu item.id là số chẵn
          content = (
            <TouchableOpacity
            style={styles.gg1}
            onPress={() => {
              navigation.navigate("ProductDetail", { item}); // Chuyển đến trang chủ khi nhấn vào nút "Continue Shopping"
            }}
          >
                <View style={styles.container1}>
              <View style={styles.khungsp1}>
                <Image style={styles.anh1} source={{ uri: item.photo }} />
              </View>
              <View style={styles.kheart1}>
                <Image
                  style={styles.heart}
                  source={require("../../assets/screenns/heart.png")}
                />
              </View>
              <View style={styles.kchu}>
                <Text style={styles.ten}>{item.title}</Text>
                <Text>{item.price} ee222</Text>
              </View>
            </View>
          </TouchableOpacity>
       
          );
        }
        if (item.id % 2 === 0 && item.id != 2) {
          // Nếu item.id là số lẻ
          content = (
            <TouchableOpacity
            style={styles.gg1}
            onPress={() => {
              navigation.navigate("ProductDetail", { item}); // Chuyển đến trang chủ khi nhấn vào nút "Continue Shopping"
            }}
          >
             <View style={styles.container2}>
              <View style={styles.khungsp1}>
                <Image style={styles.anh1} source={{ uri: item.photo }} />
              </View>
              <View style={styles.kheart1}>
                <Image
                  style={styles.heart}
                  source={require("../../assets/screenns/heart.png")}
                />
              </View>
              <View style={styles.kchu}>
                <Text style={styles.ten}>{item.title}111</Text>
                <Text>{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
           
          );
        }

        return content;
      }}
    />
  );
};

const styles = StyleSheet.create({
  dau1: {
    backgroundColor: "#fff",
    flexDirection: "row", // Hiển thị sản phẩm theo hàng ngang
  },
  dau: {
    backgroundColor: "#fff",
    // Hiển thị sản phẩm theo hàng ngang
    flexWrap: "wrap", // Cho phép các sản phẩm xuống hàng mới khi không đủ không gian
    marginRight: 5,
  },
  container: {
    width: 185,
    height: 310,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  khungsp: {
    height: 258,
    width: 185, // Điều chỉnh kích thước của mỗi sản phẩm
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#ccc",
  },
  anh: {
    width: 185, // Điều chỉnh kích thước ảnh
    height: 258,
  },
  container1: {
    marginTop: 10,
    height: 260,
    width: 185, // Điều chỉnh kích thước của mỗi sản phẩm
    backgroundColor: "#FFF",
    marginLeft: 10,
  },
  container2: {
    top: -15,
    height: 260,
    width: 185, // Điều chỉnh kích thước của mỗi sản phẩm
    backgroundColor: "#FFF",
    marginLeft: 10,
  },
  khungsp1: {
    height: 218,
    width: 185, // Điều chỉnh kích thước của mỗi sản phẩm
    backgroundColor: "#ccc",
    borderRadius: 15,
    overflow: "hidden",
  },
  anh1: {
    width: 185, // Điều chỉnh kích thước ảnh
    height: 218,
  },
  ten: {
    paddingTop: 4,
    fontSize: 16,
    // textAlign: "center",
  },
  kheart: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    top: -250,
    left: 130,
  },
  kheart1: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    top: -210,
    left: 130,
  },
  kchu: {
    top: -40,
  },
});

export default Product;
