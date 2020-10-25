import React, { useContext, useEffect } from "react";
import * as S from "./Homepage.styled";
import { DefaultTemplate } from "../../components";
import ActivitiesCard from "./components/ActivitiesCard";

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
      <S.HomepageStyle>
        <ul className="list">
          <ActivitiesCard
            item={{
              id: 1,
              image:
                "https://images.unsplash.com/photo-1603329464697-e043f7fd310e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1706&q=80",
              title: "Product title",
              desc: "product description",
              price: 230,
              discountedPrice: 200,
              currency: "€",
            }}
          ></ActivitiesCard>
          <ActivitiesCard
            item={{
              id: 1,
              image:
                "https://images.unsplash.com/photo-1603329464697-e043f7fd310e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1706&q=80",
              title: "Product title",
              desc: "product description",
              price: 230,
              discountedPrice: 200,
              currency: "€",
            }}
          ></ActivitiesCard>
          <ActivitiesCard
            item={{
              id: 1,
              image:
                "https://images.unsplash.com/photo-1603329464697-e043f7fd310e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1706&q=80",
              title: "Product title",
              desc: "product description",
              price: 230,
              discountedPrice: 200,
              currency: "€",
            }}
          ></ActivitiesCard>
          <ActivitiesCard
            item={{
              id: 1,
              image:
                "https://images.unsplash.com/photo-1603329464697-e043f7fd310e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1706&q=80",
              title: "Product title",
              desc: "product description",
              price: 230,
              discountedPrice: 200,
              currency: "€",
            }}
          ></ActivitiesCard>
          <ActivitiesCard
            item={{
              id: 1,
              image:
                "https://images.unsplash.com/photo-1603329464697-e043f7fd310e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1706&q=80",
              title: "Product title",
              desc: "product description",
              price: 230,
              discountedPrice: 200,
              currency: "€",
            }}
          ></ActivitiesCard>
        </ul>
      </S.HomepageStyle>
    </DefaultTemplate>
  );
};

export default Homepage;
