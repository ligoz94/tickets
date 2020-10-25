import styled from "styled-components";
import { variables, fontSize } from "../../../styles";

export const ActivitiesCardStyle = styled.li`
  padding: 20px;
  margin: 10px;
  box-shadow: 1px 1px 10px -3px ${variables.black};
  @media (min-width: 480px) {
    flex: 1 0 calc(100% / 2 - 20px);
    max-width: calc(100% / 2 - 20px);
  }
  @media (min-width: 769px) {
    flex: 1 0 calc(100% / 3 - 20px);
    max-width: calc(100% / 3 - 20px);
  }
  .activities-card {
    &.image-container {
      height: 150px;
      margin-bottom: 20px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .icon-container {
        position: absolute;
        top: -8px;
        right: -8px;
        background-color: ${variables.white};
        border: 1px solid ${variables.grey};
        border-radius: 50%;
        transition: 0.3s border;
        cursor: pointer;
        &:hover {
          border: 1px solid ${variables.darkBlu};
          .icon {
            svg polygon {
              fill: ${variables.darkBlu};
            }
          }
        }
        .icon {
          padding: 5px;
        }
      }
    }

    &.info-container {
      text-align: center;
      padding: 10px 0 20px;
      .title {
        padding-bottom: 10px;
        font-family: "Lato-Bold", sans-serif;
        font-size: ${fontSize.small};
        letter-spacing: 1.37px;
        text-transform: uppercase;
      }
      .desc {
        padding-bottom: 10px;
        font-size: ${fontSize.tiny};
        line-height: 19px;
        letter-spacing: 0.43px;
        color: ${variables.darkGrey};
        margin: 0;
      }
    }
    .price-container {
      .price {
        text-decoration: line-through;
        margin-right: 10px;
      }
      .discounted-price {
        color: ${variables.red};
      }
    }
  }
`;
