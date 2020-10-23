import styled from "styled-components";
import { variables } from "../../../styles";

export const IconStyle = styled.div`
  display: inline-block;
  line-height: 0;
  font-size: ${(p) => `${p.size}px`};
  position: relative;

  .badge {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${variables.blu};
    border-radius: 50%;
    position: absolute;
    top: -8px;
    right: -8px;
    width: 13px;
    height: 13px;
    font-family: "Lato-Bold", sans-serif;
    font-size: 8px;
    color: #ffffff;
  }

  & > svg {
    height: ${(p) => `${p.size}px`};
    width: ${(p) => `${p.size}px`};
    g {
      fill: ${(p) => `${p.color}`};
    }
    path {
      fill: ${(p) => `${p.color}`};
    }
    polygon {
      fill: ${(p) => `${p.color}`};
    }
  }
`;
