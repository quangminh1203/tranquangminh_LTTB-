import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios from "axios"; // Import the axios library
import { useNavigation } from "@react-navigation/native";
import { useCart } from "./SaveCart";
import { useAuth } from "../Login/AuthContext ";
function CheckOut({route}) {
  const { totalPrice } = route.params; 
  const { cartItems,clearCart } = useCart();
  
  const { user} = useAuth();
  const [dichi, setDichi] = useState(""); // Thêm state mới

  const navigation = useNavigation();
  console.log(cartItems)
  console.log(user)
  const createOrder = async (orderData) => {
    try {
      const response = await axios.post(
        'https://fakestoreapi.com/oder',
        orderData
      );
  
      // Xử lý phản hồi từ API nếu cần
      console.log(response.data);
      return response.data;
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Error creating order:', error);
      throw error;
    }
  };
  const createOrderDetail = async (orderdetailData) => {
    try {
      const response1 = await axios.post(
        'https://fakestoreapi.com/oderdetail',
        orderdetailData
      );
  
      console.log(response1.data);
      return response1.data;
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Error creating111 order:', error);
      throw error;
    }
  };


  const radioButtons = [
    { label: "Gpay", value: "option1" },
    { label: "Debit / Credit Card", value: "option2" },
    { label: "Paypal", value: "option3" },
    { label: "Bank Transfer", value: "option4" },
  ];

  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioButtonPress = (value) => {
    setSelectedValue(value);
  };

  
  const radioButtons1 = [
    {
      label:
        "Selina K,\n 21/3, Ragava Street,\n Silver tone,\n Kodaikanal - 655 789",
      value: "option1",
    },
    {
      label: "Raghu K,\n44, Arden Street,\nDown town,\nKodaikanal - 655 789",
      value: "option2",
    },
  ];

  const [selectedValue1, setSelectedValue1] = useState(null);

  const handleRadioButtonPress1 = (value) => {
    setSelectedValue1(value);
    // Cập nhật giá trị dichi dựa trên radio button đã chọn
    const selectedAddress = radioButtons1.find((radio) => radio.value === value);
    setDichi(selectedAddress.label);
  };
  // Cartt.js

const handleCreateOrder = async () => {
  try {
    const orderData = {
      // Thêm thông tin đơn hàng, sản phẩm, số lượng và giá vào đây
      dichi: dichi,
      sdt: user.sdt,
      sum:totalPrice,
      ten:user.tenkh,
      user_id:user.id

    };
    const createdOrder = await createOrder(orderData);
    const orderdetailData = cartItems.map((item) => ({
      oder_id: createdOrder.id,  // Thay bằng id của đơn hàng thực tế
      product_id: item.id,
      sl: item.sl,
      price: item.price,
    }));
    console.log('Orderdetail data111111111:', orderdetailData);
    const createdOrderDetail = await createOrderDetail(orderdetailData);
    navigation.navigate("CartSuccess");
    clearCart();
    console.log('Order created successfully:', createdOrder);
    console.log('Orderdetail created successfully:', createdOrderDetail);
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error('Error creating 222order:', error);
  }
};


  return (
    <View style={styles.container}>
      <View style={styles.vo}>
      
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            navigation.navigate("Cartt"); // Chuyển đến trang chủ khi nhấn vào nút "Continue Shopping"
          }}
        >
          <Image
            style={styles.ic}
            source={require("../../assets/screenns/arrow-left.png")}
          ></Image>
        </TouchableOpacity>
         
     
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

      <View style={styles.rdi}>
        {radioButtons.map((radio, index) => (
          <TouchableOpacity
            key={index}
            style={styles.radioButton}
            onPress={() => handleRadioButtonPress(radio.value)}
          >
            <View
              style={[
                styles.radioButtonCircle,
                selectedValue === radio.value &&
                  styles.radioButtonCircleSelected,
              ]}
            >
              {selectedValue === radio.value && (
                <Text style={styles.radioButtonDot}>.</Text>
              )}
            </View>
            <Text style={styles.radioButtonLabel}>{radio.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.hr}></View>
      <View>
        <Text style={styles.txt1}>Delivery Address</Text>
        <ScrollView
          horizontal={true} // Đặt thuộc tính horizontal thành true để tạo scroll view chiều ngang
          contentContainerStyle={{ padding: 20 }} // Tùy chỉnh style của nội dung bên trong scroll view
        >
          {radioButtons1.map((radio, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.radioButton1,
                selectedValue1 === radio.value && styles.radioButtonSelected,
              ]}
              onPress={() => handleRadioButtonPress1(radio.value)}
            >
              <View
                style={[
                  styles.radioButtonCircle1,
                  selectedValue1 === radio.value &&
                    styles.radioButtonCircleSelected1,
                ]}
              />
              <Text style={styles.radioButtonLabel1}>{radio.label}</Text>
            </TouchableOpacity>
          ))}
          {/* Thêm các mục khác theo ý muốn */}
        </ScrollView>
      </View>
      <Text style={styles.txt2}> + Add a New Address</Text>
      <View style={styles.vo1}>
        <View>
          <Image
            style={styles.ic}
            source={require("../../assets/screenns/cart.png")}
          ></Image>
        </View>
        <View style={styles.ib1}>
          <Text style={styles.txt2}>Estimated delivery: 25 March 2024</Text>
        </View>
      </View>
      <View style={styles.phi}>
        <View style={styles.phic}>
          <Text style={styles.ch}>Bag Total</Text>
          <Text style={styles.tt}>${totalPrice}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.gg1}
         onPress={
          handleCreateOrder
         
          // Chuyển đến trang chủ khi nhấn vào nút "Continue Shopping"
        }>
        <Text style={{ fontWeight: "700", color: "#FFF" }}>
        Pay and Complete Order
        </Text>
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
  vo: {
    backgroundColor: "#FFF",
    flexDirection: "row",
  },
  vo1: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  ib: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft:75,
  },
  ib1: {
    marginLeft: 20,
  },

  ic: {
    width: 24,
    height: 24,
  },

  txt: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
  },
  txt1: {
    marginTop: 20,
    color: "black",
    fontSize: 16,
    fontWeight: "700",
  },
  txt2: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
  },
  hr: {
    marginTop: 40,
    height: 1,
    width: "100%",
    backgroundColor: "black",
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
    marginTop: 30,
    flexDirection: "column",
  },
  phic: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 20,
    justifyContent: "center", // Canh chữ theo chiều dọc giữa khung
    alignItems: "center", // Canh chữ theo chiều ngang giữa khung
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
  rdi: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 40,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  radioButtonCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 10,
  },
  radioButtonCircleSelected: {
    // Thay đổi màu chỉ trong ô tròn khi radio button được chọn
    borderColor: "#42D1FO",
    backgroundColor: "black",
  },
  radioButtonLabel: {
    fontSize: 16,
  },
  radioButtonSelected: {
    // Kiểu dáng khi radio button được chọn
    backgroundColor: "#ccc",
  },
  ///===================
  radioButton1: {
    flexDirection: "row",
    width: 230,
    height: 118,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginRight: 10,
  },
  radioButtonCircle1: {
    left: 10,
    top: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    marginRight: 20,
  },
  radioButtonCircleSelected1: {
    // Thay đổi màu chỉ trong ô tròn khi radio button được chọn
    borderColor: "#42D1FO",
    backgroundColor: "black",
  },
  radioButtonLabel1: {
    top: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  radioButtonSelected1: {
    // Kiểu dáng khi radio button được chọn
    backgroundColor: "#42D1FO",
  },
});
export default CheckOut;
