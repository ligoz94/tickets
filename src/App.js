import React from "react";
import "./App.css";
import { Homepage } from "./pages";
import { HomepageProvider } from "./stateManagement/HomePageContext/HomePageState";
import { CartProvider } from "./stateManagement/CartContext/CartState";
import { FavoritesProvider } from "./stateManagement/FavoritesContext/FavoritesState";

const App = () => {
  return (
    <CartProvider>
      <FavoritesProvider>
        <HomepageProvider>
          <Homepage></Homepage>
        </HomepageProvider>
      </FavoritesProvider>
    </CartProvider>
  );
};

export default App;
