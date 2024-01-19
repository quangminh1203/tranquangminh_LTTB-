import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import axios from 'axios';

const apiUrl = 'http://192.168.1.7:8080/api/user'; // Thay thế bằng URL thực tế của API xác thực

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get(apiUrl); // Gửi yêu cầu GET để lấy thông tin từ API

      // Kiểm tra xem thông tin đăng nhập có tồn tại trong dữ liệu API hay không
      const user = response.data.content.find((user) => user.tk === username && user.mk === password);

      if (user) {
        // Đăng nhập thành công, bạn có thể lưu token vào Redux hoặc AsyncStorage
        // Sau đó chuyển đến màn hình chính
        Alert.alert('Thông báo', 'Đăng nhập thành công');
        // navigation.navigate('HomePage');
      } else {
        // Đăng nhập thất bại, hiển thị thông báo lỗi
        Alert.alert('Thông báo', 'Tên người dùng hoặc mật khẩu không đúng');
      }
    } catch (error) {
      // Xử lý lỗi kết nối đến API
      console.error(error);
      Alert.alert('Thông báo', 'Đã xảy ra lỗi khi kết nối đến máy chủ');
    }
  };

  return (
    <View>
      <Text>ssss</Text>
      <Text>ssss</Text>
      <Text>ssss</Text>
      <Text>ssss</Text>
      <Text>ssss</Text>
      <Text>ssss</Text>
      <Text>ssss</Text>
      <Text>ssss</Text>
      <Text>ssss</Text>
      <TextInput
        placeholder="Tên người dùng"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Đăng nhập" onPress={handleLogin} />
    </View>
  );
}

export default LoginScreen;
