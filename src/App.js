import React from "react";
import "./App.css";
import { Homepage } from "./pages";
import { HomepageProvider } from "./stateManagement/HomePageContext/HomePageState";
import { CartProvider } from "./stateManagement/CartContext/CartState";

const App = () => {
  return (
    <CartProvider>
      <HomepageProvider>
        <Homepage></Homepage>
      </HomepageProvider>
    </CartProvider>
  );
};

export default App;
