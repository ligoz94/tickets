import React from "react";
import * as S from "./Loader.styled";

const Loader = ({ center }) => {
  return (
    <S.LoaderStyle center={center}>
      <div className="loader">
        <svg width="1em" height="1em">
          <circle cx="0.5em" cy="0.5em" r="0.45em" />
        </svg>
      </div>
    </S.LoaderStyle>
  );
};

export default Loader;
