import React from "react";
import * as S from "./DefaultTemplate.styled";
import BasicTemplate from "../BasicTemplate/BasicTemplate";

const DefaultTemplate = (props) => {
  // Custom Header
  const Header = () => {
    return (
      <S.Header>
        <div className="header-left">Header</div>
        <div className="header-right">Actions</div>
      </S.Header>
    );
  };

  // Custom footer
  const Footer = () => {
    return (
      <S.Footer>
        <label>Footer</label>
      </S.Footer>
    );
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
