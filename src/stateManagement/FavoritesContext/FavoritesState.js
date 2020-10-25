import React, { useState } from "react";

// Context
export const FavoritesContext = React.createContext();

// Exposes the properties of the context to the child components
export const FavoritesProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite: (item) => {
          setFavorites([...favorites, item]);
        },
        removeFavorite: (item) => {
          let newFavorites = favorites.filter((ele) => ele.id !== item.id);
          console.log(newFavorites);
          setFavorites(newFavorites);
        },
      }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};
