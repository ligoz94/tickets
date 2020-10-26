import styled from "styled-components";

export const ActivitiesListStyle = styled.div`
  .activities-list {
    text-align: center;
    &.cards {
      display: flex;
      flex: 0 1 auto;
      flex-flow: row wrap;
      margin: 0 -10px;
    }
    &.load-more {
      display: flex;
      justify-content: center;
      margin: 15px 0;
      .button {
        width: 250px;
      }
    }
  }
`;
