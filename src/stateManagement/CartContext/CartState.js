import React, { useState } from "react";

// Context
export const CartContext = React.createContext();

// Exposes the properties of the context to the child components
export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart: (item) => {
          setCartItems([...cartItems, item]);
        },
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
