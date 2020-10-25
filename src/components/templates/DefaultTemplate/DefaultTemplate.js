import React, { useContext } from "react";
import * as S from "./DefaultTemplate.styled";
import BasicTemplate from "../BasicTemplate/BasicTemplate";

// Context
import { CartContext } from "../../../stateManagement/CartContext/CartState";
import { FavoritesContext } from "../../../stateManagement/FavoritesContext/FavoritesState";
import { Icon } from "../../atoms";
import { variables } from "../../../styles";

const DefaultTemplate = (props) => {
  // Homepage context
  const { cartItems } = useContext(CartContext);
  const { favorites } = useContext(FavoritesContext);

  // Custom Header
  const Header = () => {
    return (
      <S.Header>
        <div className="header-left">Header</div>
        <div className="header-right">
          <Icon
            path="bag"
            size={20}
            color={variables.darkBlu}
            badge={cartItems && cartItems.length}
          />
          <Icon
            path="whishlist"
            size={20}
            color={variables.darkBlu}
            badge={favorites && favorites.length}
          />
        </div>
      </S.Header>
    );
  };

  // Custom footer
  const Footer = () => {
    return <S.Footer></S.Footer>;
  };

  return (
    <S.DefaultTemplateStyle>
      <BasicTemplate header={<Header />} footer={<Footer />}>
        {props.children}
      </BasicTemplate>
    </S.DefaultTemplateStyle>
  );
};

export default DefaultTemplate;
