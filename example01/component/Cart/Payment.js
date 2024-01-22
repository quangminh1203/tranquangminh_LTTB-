import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
  Alert,
} from "react-native";

const PaymentPage = ({ route, navigation }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const { cartItems } = route.params || {};
const [paymentMessage, setPaymentMessage] = useState("");
  const validateInputs = () => {
    let isValid = true;

    if (!name) {
      setNameError("Vui lòng nhập họ và tên");
      isValid = false;
    } else {
      setNameError("");
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError("Số điện thoại không hợp lệ. Vui lòng nhập 10 chữ số");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (!address) {
      setAddressError("Vui lòng nhập địa chỉ");
      isValid = false;
    } else {
      setAddressError("");
    }

    return isValid;
  };

  const placeOrder = () => {
    // Kiểm tra hợp lệ trước khi xử lý đặt hàng
    if (!validateInputs()) {
      return;
    }

    // Xử lý đặt hàng với thông tin, cartItems và phương thức thanh toán được chọn
    console.log("Order Placed:", {
      name,
      phoneNumber,
      address,
      cartItems,
      selectedPaymentMethod,
    });

    // Hiển thị thông báo đặt hàng thành công
    setIsOrderPlaced(true);

    // Hiển thị thông báo khi thanh toán qua Momo
   if (selectedPaymentMethod === "momo") {
     setPaymentMessage("Thanh toán qua Momo");
     setShowPaymentModal(true);
   }

    // Bạn có thể chuyển hướng đến một trang xác nhận hoặc thực hiện bất kỳ hành động nào khác sau khi đặt hàng
    // For simplicity, let's navigate back to the cart screen after a delay
    setTimeout(() => {
      setPaymentMessage(""); // Đặt lại thông báo sau khi hiển thị
      setIsOrderPlaced(false);
      navigation.navigate("ProductCart");
    }, 2000); // Delay for 2 seconds (adjust as needed)
  };

  const renderPaymentMethod = (method, label) => {
    const isSelected = selectedPaymentMethod === method;

    return (
      <TouchableOpacity
        style={[
          styles.paymentMethodContainer,
          isSelected && styles.selectedPaymentMethod,
        ]}
        onPress={() => setSelectedPaymentMethod(method)}
      >
        {isSelected && (
          <View>
            {/* Bạn có thể thêm hình ảnh ở đây nếu cần */}
            <Text style={styles.paymentMethodName}>{label}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Thông Tin Thanh Toán</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Họ và Tên:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.errorText}>{nameError}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Số Điện Thoại:</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="phone-pad"
        />
        <Text style={styles.errorText}>{phoneError}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Địa Chỉ:</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <Text style={styles.errorText}>{addressError}</Text>
      </View>

      <View style={styles.paymentMethodsContainer}>
        <Text style={styles.paymentMethodsLabel}>
          Chọn Phương Thức Thanh Toán:
        </Text>

        <View style={styles.paymentMethodRow}>
          <TouchableOpacity
            style={styles.paymentMethodText}
            onPress={() => setSelectedPaymentMethod("cash")}
          >
            <Text style={styles.paymentMethodName}>
              Thanh toán khi nhận hàng
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.paymentMethodText}
            onPress={() => setSelectedPaymentMethod("momo")}
          >
            <Text style={styles.paymentMethodName}>Thanh toán qua Momo</Text>
            {paymentMessage !== "" && (
              <Modal visible={true} transparent animationType="slide">
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Thanh toán </Text>
                  </View>
                </View>
              </Modal>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.paymentMethodText}
            onPress={() => setSelectedPaymentMethod("bank")}
          >
            <Text style={styles.paymentMethodName}>
              Thanh toán qua ngân hàng
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.placeOrderButton} onPress={placeOrder}>
        <Text style={styles.placeOrderButtonText}>Đặt Hàng</Text>
      </TouchableOpacity>

      {/* Order placed modal */}
      <Modal visible={isOrderPlaced} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Đặt hàng thành công</Text>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  placeOrderButton: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: "center",
  },
  placeOrderButtonText: {
    color: "white",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginTop: 4,
  },
  paymentMethodsContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  paymentMethodContainer: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedPaymentMethod: {
    backgroundColor: "green", // Màu khi phương thức được chọn
  },
  paymentMethodLogo: {
    width: 50,
    height: 50,
  },
  paymentMethodsLabel: {
    fontSize: 16,
    left: 10,
    bottom: 20,

  },
  paymentMethodName: {
    fontSize: 12,
    textAlign: "center",
    
  },
  paymentMethodText: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
    right: 150,
  },
});

export default PaymentPage;