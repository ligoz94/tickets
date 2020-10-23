import React from "react";
import * as S from "./Button.styled";

const Button = ({ title, onClick, variant, className }) => {
  const getBtnStyle = (variant) => {
    switch (variant) {
      case "primary":
        return "primary";
      case "secondary":
        return "secondary";
      default:
        return "primary";
    }
  };

  return (
    <S.ButtonStyle onClick={onClick} className={className}>
      <div className={`button ${getBtnStyle(variant)}`}>
        <span className="button--title">{title}</span>
      </div>
    </S.ButtonStyle>
  );
};

export default Button;
