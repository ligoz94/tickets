import styled from "styled-components";
import { fontSize, variables } from "../../../styles";

export const ButtonStyle = styled.div`
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 13px;
    font-family: "Lato-Bold", sans-serif;
    font-size: ${fontSize.tiny};
    text-transform: uppercase;
    letter-spacing: 1.39px;
    border-radius: 100px;
    &.primary {
      border: 1px solid ${variables.grey};
      background-color: #ffffff;
      transition: 0.3s border, 0.3s color, 0.3s background-color;
      color: ${variables.black};
      &:hover {
        color: ${variables.white};
        border: 1px solid ${variables.darkBlu};
        color: ${variables.white};
        background-color: ${variables.darkBlu};
      }
    }
    &.secondary {
      pointer-events: none;
      background-color: ${variables.grey};
    }
  }
`;
