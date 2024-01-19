import React, { useState } from 'react';
import { View, TextInput, Button, Alert,Text } from 'react-native';
import axios from 'axios';

const apiUrl = 'http://192.168.1.7:8080/api/user'; // Thay thế bằng URL thực tế của API đăng ký

function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post(apiUrl, {
        tk: username,
        mk: password,
        tenkh: email,
        sdt:username,
        dichi:username
        //Thêm các thông tin khác cần thiết cho đăng ký
      });

      if (response.data.success) {
        // Đăng ký thành công
        Alert.alert('Thông báo', 'Đăng ký thành công');
        // Sau đó, bạn có thể thực hiện điều gì đó sau khi đăng ký thành công, ví dụ chuyển đến màn hình đăng nhập
        navigation.navigate('LoginScreen');
      } else {
        // Đăng ký thất bại, hiển thị thông báo lỗi từ API
        Alert.alert('Thông báo', response.data.message);
      }
    } catch (error) {
      // Xử lý lỗi kết nối đến API
      console.error(error);
      Alert.alert('Thông báo', 'Đã xảy ra lỗi khi kết nối đến máy chủ');
    }
  };

  return (
    <View>
      <Text>aaa</Text>
      <Text>aaa</Text>
      <Text>aaa</Text>
      <Text>aaa</Text>
      <Text>aaa</Text>
      <Text>aaa</Text>
      <Text>aaa</Text>
      <Text>aaa</Text>
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
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      {/* Thêm các trường nhập dữ liệu cho thông tin đăng ký khác (ví dụ: tên, họ, số điện thoại, v.v.) */}
      <Button title="Đăng ký" onPress={handleRegister} />
    </View>
  );
}

export default RegisterScreen;
