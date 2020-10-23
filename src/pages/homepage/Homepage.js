import React, { useContext, useEffect } from "react";
import * as S from "./Homepage.styled";
import { DefaultTemplate } from "../../components";

// Context
import { HomepageContext } from "../../stateManagement/HomePageContext/HomePageState";
// import { CartContext } from "../../stateManagement/CartContext/CartState";

const Homepage = () => {
  // Homepage context
  const { state, _getActivities } = useContext(HomepageContext);

  useEffect(() => {
    // Call api and get activities
    _getActivities();
  }, []);

  // const { activities, loading } = state;

  return (
    <DefaultTemplate>
      <S.HomepageStyle></S.HomepageStyle>
    </DefaultTemplate>
  );
};

export default Homepage;
