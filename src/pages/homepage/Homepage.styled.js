import styled from "styled-components";

export const HomepageStyle = styled.div`
  max-width: 1240px;
  padding: 0 20px;
  margin: 0 auto;
  text-align: left;

  @media (min-width: 768px) {
    padding: 0 40px;
  }
  .list {
    display: flex;
    flex: 0 1 auto;
    flex-flow: row wrap;
    margin: 0 -10px;
  }
`;
