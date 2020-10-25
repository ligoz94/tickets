import React from "react";
import { getIcon } from "./icons";
import * as S from "./Icon.styled";

// Icon component
const Icon = ({ path, size, color, className, onClickIcon, badge }) => {
  // Return size
  const getSize = (size) => {
    switch (size) {
      case "tiny":
        return "15";
      case "small":
        return "20";
      case "medium":
        return "30";
      case "large":
        return "50";
      case "huge":
        return "60";
      default:
        return size;
    }
  };

  return (
    <S.IconStyle
      className="icon"
      size={getSize(size) || 24}
      onClick={onClickIcon}
      color={color}
    >
      {badge > 0 && <span className="badge">{badge}</span>}
      {getIcon(path, color)}
    </S.IconStyle>
  );
};

export default Icon;
