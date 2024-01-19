import React, { createContext, useContext, useState,useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
    
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== item.id));
  };
  
  const updateQuantity = (item, newQuantity) => {
    // Tìm sản phẩm trong giỏ hàng và cập nhật số lượng
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, sl: newQuantity };
      }
      return cartItem;
    });

    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,updateQuantity,clearCart}}>
      {children}
    </CartContext.Provider>
  );
  
}

export function useCart() {
  return useContext(CartContext);
}
