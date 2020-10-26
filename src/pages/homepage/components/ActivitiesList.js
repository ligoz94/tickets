import React, { useCallback, useEffect, useContext } from "react";
import ActivitiesCard from "./ActivitiesCard";
// Style
import * as S from "./ActivitiesList.styled";
// Components
import { Button, Loader } from "../../../components";
// Context
import { HomepageContext } from "../../../stateManagement/HomePageContext/HomePageState";
import placeholder from "../../../resources/images/placeholder.png";

// Activities card
const ActivitiesList = () => {
  // Homepage context
  const { state, _getActivities } = useContext(HomepageContext);
  const { activities, loading } = state;

  useEffect(() => {
    // Call api and get activities
    _getActivities();
  }, []);

  // Load More activities
  const onLoadMore = () => {
    _getActivities();
  };

  // Render card
  const renderItems = useCallback(
    (items) => {
      return normalizeData(items).map((item, index) => {
        return <ActivitiesCard key={index} item={item} />;
      });
    },
    [activities]
  );

  // Normalize data
  const normalizeData = (items) => {
    return items.map((e, index) => {
      return {
        ...e,
        image: e.cover_image_url
          ? e.cover_image_url + "?q=60&fit=crop&w=300&h=250"
          : placeholder,
        desc: e.description,
        price: e.retail_price && e.retail_price.formatted_value, //e.net_price && e.net_price.formatted_value,
        discountedPrice: e.retail_price && e.retail_price.formatted_value,
        discounted: e.discounted,
        id: index,
      };
    });
  };

  return (
    <S.ActivitiesListStyle className="activities-list">
      <div className="activities-list cards">
        {activities && renderItems(activities)}
      </div>
      <div className="activities-list load-more">
        {loading ? (
          <div>
            <Loader center />
          </div>
        ) : (
          <Button
            variant="primary"
            className="load-more"
            onClick={onLoadMore}
            title="Load More"
          />
        )}
      </div>
    </S.ActivitiesListStyle>
  );
};

export default React.memo(ActivitiesList);
