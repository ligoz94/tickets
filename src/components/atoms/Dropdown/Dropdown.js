import React from "react";

// Styles
import { variables } from "../../../styles";
import * as S from "./Dropdown.styled";
// Component
import Icon from "../Icon/Icon";


// Single row 
const Row = ({item, callback}) => {
  let {title, image, price} = item;
  return <div className="dropdown-row">
    <div className="image">
      <img src={image} alt="alt"/>
    </div>
    <div className="text">
      <p className="title">{title}</p>
     <p className="price">{price}</p>
    </div>
    <div className="action">
      <Icon
        path="close"
        size={22}
        color={variables.black}
        onClickIcon={() => callback(item)}
      />
    </div>
  </div>
}

const Dropdown = ({items, className, onClickItem}) => {
  return (
    <S.DropdownStyle className={className}>
      <ul className="dropdown-list">
        {items && items.map((el, index) => {
          return <Row key={index} item={el} callback={onClickItem} />
        })}
      </ul>
    </S.DropdownStyle>
  );
};

export default Dropdown;