import styled from "styled-components";
import { variables } from "../../../styles";

export const LoaderStyle = styled.div`
  ${(p) => p.center && `text-align: center;`}

  .loader {
    display: inline-block;
    font-size: 2rem; /* Change this to resize the loader */
    animation: 2s rotate infinite linear;
    width: 1em;
    height: 1em;
  }

  .loader circle {
    fill: transparent;
    stroke: ${variables.darkBlu};
    stroke-width: 0.1em;
    stroke-linecap: round;
    stroke-dasharray: 2.3525em 0.4705em;
    animation: 1.5s strokeDashArray infinite linear,
      24s colorBounce infinite linear;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes strokeDashArray {
    from {
      stroke-dasharray: 2.3525em 0.4705em;
      stroke-dashoffset: 0;
    }

    10% {
      stroke-dasharray: 2.3525em 0.4705em;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 0.001em 2.825em;
      stroke-dashoffset: -2.826em;
    }

    60% {
      stroke-dasharray: 0.001em 2.825em;
    }

    to {
      stroke-dasharray: 2.3525em 0.4705em;
      stroke-dashoffset: -2.826em;
    }
  }
`;
