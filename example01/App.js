import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./component/Home/HomePage";
import ProductDetail from "./component/Product/ProductDetail";
import LoginStart from "./component/Login/LoginStart";
import LoginScreen from "./component/Login/LoginScreen";
import RegisterScreen from "./component/Login/RegisterScreen ";
import Cartt from "./component/Cart/Cartt";
import CartSuccess from "./component/Cart/CartSuccess";
import CheckOut from "./component/Cart/CheckOut";
import { CartProvider } from "./component/Cart/SaveCart";
import { AuthProvider } from "./component/Login/AuthContext ";
import LottieView from 'lottie-react-native';
import Profile from "./component/Home/profile";
import Searchread from "./component/Home/Searchread";
import Payment from "./component/Cart/Payment";
function App() {
  const Stack = createStackNavigator();
  return (
   
    <AuthProvider>
          <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home122">
          {/* <Stack.Screen
            name="LoginStart"
            component={LoginStart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }}
          />
              
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cartt"
            component={Cartt}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CheckOut"
            component={CheckOut}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CartSuccess"
            component={CartSuccess}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
            <Stack.Screen
            name="Searchread"
            component={Searchread}
            options={{ headerShown: false }}
          />
            <Stack.Screen
          name="Payment"
          component={Payment}
          options={{
            headerTitleStyle: { color: "red" },
          }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
    </AuthProvider>

   
  );
}

export default App;
