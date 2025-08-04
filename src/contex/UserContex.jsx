// src/context/UserContext.jsx
import React, { createContext, useState } from "react";

export const DataContext = createContext();

function UserContext({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    const exists = cartItems.find((i) => i.id === item.id);
    if (!exists) {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price, 0);
  };

  const checkoutCart = () => {
    alert("Order placed successfully! 🍽️");
    setCartItems([]);
    setIsCartOpen(false);
  };

  return (
    <DataContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        cartItems,
        setCartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        getTotal,
        checkoutCart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default UserContext;
