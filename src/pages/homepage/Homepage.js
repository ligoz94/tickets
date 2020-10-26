import React from "react";
import * as S from "./Homepage.styled";
import { DefaultTemplate } from "../../components";

// Context

import ActivitiesList from "./components/ActivitiesList";

const Homepage = () => {
  return (
    <DefaultTemplate>
      <S.HomepageStyle>
        <ActivitiesList />
      </S.HomepageStyle>
    </DefaultTemplate>
  );
};

export default Homepage;
