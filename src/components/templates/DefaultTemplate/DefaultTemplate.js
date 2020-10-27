import React, { useContext, useEffect, useState } from "react";
import * as S from "./DefaultTemplate.styled";
import BasicTemplate from "../BasicTemplate/BasicTemplate";

// Context
import { CartContext } from "../../../stateManagement/CartContext/CartState";
import { FavoritesContext } from "../../../stateManagement/FavoritesContext/FavoritesState";
import { Dropdown, Icon } from "../../atoms";
import { variables } from "../../../styles";


const DefaultTemplate = (props) => {
  // Homepage context
  const { cartItems, removeItemFromCart } = useContext(CartContext);
  const { favorites, removeFavorite} = useContext(FavoritesContext);
  const [ showCart, setShowCart ] = useState(false);
  const [ showFavorites, setShowFavorites ] = useState(false);


  // Custom Header
  const Header = () => {
    return (
      <S.Header>
        <div className="header-left">Header</div>
        <div className="header-right">
          <div className="cart">
            <Icon
              path="bag"
              size={20}
              color={variables.darkBlu}
              badge={cartItems && cartItems.length}
              onClickIcon={cartItems && cartItems.length ? () => setShowCart(!showCart) : () => {}}
            />
            <Dropdown className={`dropdown-wrapper ${showCart ? 'show' : 'hide'}`} items={cartItems} onClickItem={removeItemFromCart}/>
          </div>
          <div className="favorites">
            <Icon
              path="whishlist"
              size={20}
              color={variables.darkBlu}
              badge={favorites && favorites.length}
              onClickIcon={favorites && favorites.length ? () => setShowFavorites(!showFavorites) : () => {}}
            />
              <Dropdown className={`dropdown-wrapper ${showFavorites ? 'show' : 'hide'}`} items={favorites} onClickItem={removeFavorite}/>
          </div>
        </div>
      </S.Header>
    );
  };

  // Custom footer
  const Footer = () => {
    return <S.Footer></S.Footer>;
  };

  // If cart is empty close dropdown
  useEffect(() => {
    if(cartItems && cartItems.length <= 0) setShowCart(false)
    if(favorites && favorites.length <= 0) setShowFavorites(false)
  }, [cartItems, favorites])

  return (
    <S.DefaultTemplateStyle>
      <BasicTemplate header={<Header />} footer={<Footer />}>
        {props.children}
      </BasicTemplate>
    </S.DefaultTemplateStyle>
  );
};

export default DefaultTemplate;
