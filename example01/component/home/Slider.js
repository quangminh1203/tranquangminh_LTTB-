import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import slider1 from "../../assets/img/slider1.jpg";
import slider2 from "../../assets/img/slider2.jpg";
import slider3 from "../../assets/img/slider3.jpg";

const images = [slider1, slider2, slider3];

const StaticSlider = () => {
  const translateX = useRef(new Animated.Value(0)).current;

  const switchImage = () => {
    Animated.timing(translateX, {
      toValue: -390, // Adjust the width of your slider
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      // Move the first image to the end of the array
      images.push(images.shift());
      translateX.setValue(0);
    });
  };

  useEffect(() => {
    const interval = setInterval(switchImage, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      
      <TouchableOpacity activeOpacity={1}>
        <Animated.View style={[styles.slider, { transform: [{ translateX }] }]}>
          {images.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={styles.sliderImage}
              resizeMode="cover"
            />
          ))}
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
    backgroundColor: "oldlace",
    flexDirection: "row",
  },
  slider: {
    flexDirection: "row",
    width: 410 * images.length, // Adjust the width based on the number of images
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  sliderImage: {
    width: 409,
    height: "100%",
  },
});

export default StaticSlider;