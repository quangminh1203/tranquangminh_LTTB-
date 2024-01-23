import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const Profile = () => {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("+1 234 567 890");
  const [address, setAddress] = useState("123 Main Street, City");
  // const [avatar, setAvatar] = useState(require("./path/to/avatar.jpg"));

  const handleEditProfile = () => {
    // Add logic to navigate to the edit profile screen
    console.log("Navigate to edit profile");
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.info}>{email}</Text>
      <Text style={styles.info}>{phone}</Text>
      <Text style={styles.info}>{address}</Text>

      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Text style={styles.editButtonText}>Chỉnh Sửa Hồ Sơ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  editButton: {
    backgroundColor: "#3498DB",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  editButtonText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Profile;