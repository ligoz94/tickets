import styled from "styled-components";

export const DefaultTemplateStyle = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px;
  .header-right {
    display: flex;
    align-items: center;
    .icon {
      margin-left: 10px;
    }
    .cart, .favorites{
      position: relative;
      .dropdown-wrapper{
        overflow: hidden;
        max-height: 0;
        transition: max-height 5s cubic-bezier(0, 1, 0, 1);
        &.show {
          overflow-y: scroll;
          max-height: 300px;
          transition: max-height 5s ease-in-out;
        }
      }

    }
  }
`;
export const Footer = styled.footer`
  height: 50px;
  background: #00192b;
`;
