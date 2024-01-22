import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet,TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getProducts } from '../Api/apiService';
const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [effectExecuted, setEffectExecuted] = useState(false);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);




  const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy danh sách categories
        const responseCategories = await fetch('https://fakestoreapi.com/products/categories');
        const categoriesData = await responseCategories.json();
        setCategories(categoriesData);

        // Lấy danh sách sản phẩm
        const responseProducts = await fetch('https://fakestoreapi.com/products');
        const productsData = await responseProducts.json();
        setProducts(productsData);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
      }
    };

    fetchData();
  }, []);
  
  console.log('useEffect đã được thực thi:', effectExecuted);
////
const handleSearch = (searchTerm) => {
  setSearchQuery(searchTerm);

  const filtered = products.filter(
    (product) =>
      (!currentCategory || product.category === currentCategory) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  setFilteredProducts(filtered);
};




  return (
    <View>
      <Text style={styles.ttk}>TÌM KIẾM SẢN PHẨM</Text>
      <View style={styles.searchContainer}>
        {/* Thêm ô tìm kiếm */}
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm sản phẩm..."
         
          onChangeText={(text) => handleSearch(text)}
          value={searchQuery}
        />
      </View>

            
      

 
    <View style={styles.pro}>
    <FlatList
      data={filteredProducts}
      numColumns={2}
      renderItem={({ item }) => {
        let content;
        
        if (item.id % 2 !== 0) {
          // Nếu item.id là số chẵn
          content = (
            
                <TouchableOpacity
                  style={styles.gg1}
                  onPress={() => {
                    navigation.navigate("ProductDetail", { item}); 
                  }}
                >
                  <View style={styles.container}>
                    <View style={styles.khungsp}>
                    <Image style={styles.image} source={{ uri: item.image }} />
                    </View>
                    <View style={styles.kheart}>
                      <Image
                        style={styles.heart}
                        source={require("../../assets/screenns/heart.png")}
                      />
                    </View>
                    <View style={styles.kchu}>
                      <Text style={styles.ten}>{item.title}</Text>
                      <Text>{item.price} </Text>
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
                  navigation.navigate("ProductDetail", {item}); 
                }}
              >
                    <View style={styles.container1}>
                  <View style={styles.khungsp1}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                  </View>
                  <View style={styles.kheart1}>
                    <Image
                      style={styles.heart}
                      source={require("../../assets/screenns/heart.png")}
                    />
                  </View>
                  <View style={styles.kchu}>
                    <Text style={styles.ten}>{item.title}</Text>
                    <Text>{item.price} </Text>
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
              navigation.navigate("ProductDetail", { item}); 
            }}
          >
             <View style={styles.container2}>
              <View style={styles.khungsp1}>
              <Image style={styles.image} source={{ uri: item.image }} />
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
    </View>
    </View>
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
  ttk:{
    top:25,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchInput: {
    top:40,
    height: 40,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },

  pro:{
    top: 60,

  },
  container: {
    width: 185,
    height: 310,
    marginTop: 10,
    marginLeft:10,
    backgroundColor: "#fff",
  },
  khungsp: {
    height: 258,
    width: 185, // Điều chỉnh kích thước của mỗi sản phẩm
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#ccc",
  },
  image: {
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
  allpro:{
    textAlign:'center',
    fontSize: 24,
    fontWeight: 'bold',

  },
});

export default Product;
