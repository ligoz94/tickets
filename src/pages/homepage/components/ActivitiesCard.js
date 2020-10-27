import React, { useState, useContext } from "react";
import { Button, Icon, LazyImage } from "../../../components";
import { variables } from "../../../styles";
import * as S from "./ActivitiesCard.styled";
// Context
import { CartContext } from "../../../stateManagement/CartContext/CartState";
import { FavoritesContext } from "../../../stateManagement/FavoritesContext/FavoritesState";

// Price component
const Price = ({ price, discountedPrice, discounted }) => {
  return (
    <div className="activities-card price-container">
      {discounted > 0 ? (
        <div>
          <span className="striked-price">{price}</span>
          <span className="discounted-price">{discountedPrice}</span>{" "}
        </div>
      ) : (
        <span className="net-price">{price}</span>
      )}
    </div>
  );
};

// Activities card
const ActivitiesCard = ({ item, onClick }) => {
  // Homepage context
  const { cartItems, addItemToCart } = useContext(CartContext);
  const { addFavorite, removeFavorite } = useContext(FavoritesContext);
  // State
  const [isFavorite, setIsFavorite] = useState(item.favorite);
  // Check if current item has already been added to the cart
  const isAlreadyInCart =
    cartItems && cartItems.lenght && cartItems.filter((ele) => ele.id === id);
  const [isItemInCart, setIsItemInCart] = useState(isAlreadyInCart);

  // Get values from item
  const { title, desc, price, discountedPrice, image, id, discounted } = item;

  // Cart handler
  const cartHandler = (item) => {
    addItemToCart(item);
    setIsItemInCart(true);
  };

  // Favorite handler
  const favoriteHandler = (item) => {
    if (isFavorite) {
      removeFavorite(item);
    } else {
      addFavorite(item);
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <S.ActivitiesCardStyle
      className="activities-card container"
      onClick={onClick}
    >
      <div className="activities-card image-container">
        <LazyImage
          className="activities-card image"
          src={image}
          alt="activities"
        />
        <div
          className={`activities-card icon-container ${
            isFavorite ? "favorite" : "no-favorite"
          }`}
          onClick={() => favoriteHandler(item)}
        >
          <Icon
            path="whishlist"
            size={18}
            color={isFavorite ? variables.darkBlu : variables.grey}
          />
        </div>
      </div>
      <div className="activities-card info-container">
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
        <Price
          price={price}
          discountedPrice={discountedPrice}
          discounted={discounted}
        />
      </div>
      <Button
        title={isItemInCart ? "IN CART" : "ADD TO CART"}
        onClick={isItemInCart ? () => {} : () => cartHandler(item)}
        variant={isItemInCart ? "secondary" : "primary"}
      ></Button>
    </S.ActivitiesCardStyle>
  );
};

export default React.memo(ActivitiesCard);
