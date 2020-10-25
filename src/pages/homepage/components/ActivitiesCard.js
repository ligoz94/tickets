import React, { useContext } from "react";
import { Button, Icon } from "../../../components";
import { variables } from "../../../styles";
import * as S from "./ActivitiesCard.styled";

// Context
import { CartContext } from "../../../stateManagement/CartContext/CartState";

// Price component
const Price = ({ price, discountedPrice, currency }) => {
  return (
    <div className="activities-card price-container">
      <span className="price">{`${currency || "€"} ${price}`}</span>
      <span className="discounted-price">{`${
        currency || "€"
      } ${discountedPrice}`}</span>
    </div>
  );
};

// Activities card
const ActivitiesCard = ({ item, onClick }) => {
  // Homepage context
  const { state, addItemToCart } = useContext(CartContext);
  // Get values from item
  const {
    title,
    desc,
    price,
    discountedPrice,
    isFavored,
    image,
    currency,
    id,
  } = item;
  // Check if current item has already been added to the cart
  const isAlreadyInCart =
    state &&
    state.cartItems &&
    state.cartItems.lenght &&
    state.cartItems.filter((ele) => ele.id === id);

  return (
    <S.ActivitiesCardStyle
      className="activities-card container"
      onClick={onClick}
    >
      <div className="activities-card image-container">
        <img className="activities-card image" src={image}></img>
        <div className="activities-card icon-container" onClick={() => {}}>
          <Icon
            path="whishlist"
            size={18}
            color={isFavored ? variables.darkBlu : variables.grey}
          />
        </div>
      </div>
      <div className="activities-card info-container">
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
        <Price
          price={price}
          discountedPrice={discountedPrice}
          currency={currency}
        />
      </div>
      <Button
        title={isAlreadyInCart ? "IN CART" : "ADD TO CART"}
        onClick={isAlreadyInCart ? () => {} : () => addItemToCart(item)}
        variant={isAlreadyInCart ? "secondary" : "primary"}
      ></Button>
    </S.ActivitiesCardStyle>
  );
};

export default React.memo(ActivitiesCard);
