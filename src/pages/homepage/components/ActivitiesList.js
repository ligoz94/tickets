import React, { useCallback, useEffect, useContext } from "react";
import ActivitiesCard from "./ActivitiesCard";
// Style
import * as S from "./ActivitiesList.styled";
// Components
import { Button, Loader } from "../../../components";
// Context
import { HomepageContext } from "../../../stateManagement/HomePageContext/HomePageState";


// Activities card
const ActivitiesList = () => {
  // Homepage context
  const { state, _getActivities } = useContext(HomepageContext);
  const { activities, loading } = state;

  useEffect(() => {
    // Call api and get activities
    _getActivities();
    // eslint-disable-next-line
  }, []);

  // Load More activities
  const onLoadMore = () => {
    _getActivities();
  };

  // Render card
  const renderItems = useCallback(
    (items) => {
      return items.map((item, index) => {
        return <ActivitiesCard key={index} item={item} />;
      });
    },
    // eslint-disable-next-line
    [activities]
  );

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
