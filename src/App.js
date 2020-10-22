import React from "react";
import "./App.css";
import { Homepage } from "./pages";
import { HomepageProvider } from "./stateManagement/HomePageContext/HomePageState";
import { CartProvider } from "./stateManagement/CartContext/CartState";

const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <HomepageProvider>
          <Homepage></Homepage>
        </HomepageProvider>
      </CartProvider>
    </div>
  );
};

export default App;
