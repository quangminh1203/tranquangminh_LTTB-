import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView,ScrollView } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import Item from "./ItemHome";
import { GET_ALL, GET_IMG } from "./apiService";

function HomeScreen() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Use the GET_ALL function to fetch data from your API
    GET_ALL("products")
      .then((response) => {
        const responseData = response.data;
        if (responseData && Array.isArray(responseData.content)) {
          setCoffeeData(responseData.content); // Update the state with the "content" array
        } else {
          console.error(
            "Data received from the API is not in a supported format."
          );
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={{ marginBottom: "auto" }}>
        <View style={styles.Content}>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            coffeeData.map((coffee, index) => (
              <Item
                key={index}
                imageSource={GET_IMG("products", coffee.photo)}
                textContent={coffee.title}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Define your styles here
});

export default HomeScreen;
