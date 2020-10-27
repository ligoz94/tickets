import React, { createContext, useEffect, useReducer, useState } from "react";
import ApiService from "../../services/ApiService";
import { GET_ACTIVITIES, GET_ACTIVITIES_SUCCESS } from "./HomePageTypes";
import placeholder from "../../resources/images/placeholder.png";

// Initil state
const initialState = {
  activities: [],
  loading: true,
};

// Create context
export const HomepageContext = createContext({});
const { Provider } = HomepageContext;

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        loading: true,
      };
    case GET_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: [...state.activities, ...action.payload.data],
        loading: false,
      };

    default:
      return state;
  }
};

// Exposes the properties of the context to the child components
export const HomepageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [limit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(null);
  const [loadMore, setLoadMore] = useState(null);
  const [response, setResponse] = useState(null);

  // Get activities
  const _getActivities = async () => {
    // Get other activties only if the number of current activities is less than totalCount
    if (
      !totalCount ||
      (state.activities && state.activities.length < totalCount)
    ) {
      // Start
      setLoadMore(true);
      dispatch({
        type: GET_ACTIVITIES,
      });
      // Url
      let url = `/activities?limit=${limit}&offset=${offset}`;
      // Set state with response
      let response = await ApiService.get(url);
      setResponse(response);
    }
  };


  // Normalize data
  const normalizeData = (items) => {
    return items.map((e, index) => {
      return {
        title: e.title,
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


  useEffect(() => {
    if (response) {
      // If api return an error set offset to the last offset called
      if (response.hasError) {
        if (offset > 10) {
          setOffset(offset - limit);
        } else {
          setOffset(0);
        }
        return;
      }
      // If response is 200 update the state with new values otherwise show error
      if (response.data) {
        setOffset(limit + offset);
        dispatch({
          type: GET_ACTIVITIES_SUCCESS,
          payload: {
            data: normalizeData(response.data),
          },
        });
      }
      //If is the first time set the total count
      if (
        response &&
        response.meta &&
        state.activities &&
        state.activities.length <= 0
      ) {
        setTotalCount(response.meta.count);
      }
    }

    setLoadMore(false);
  }, [response]);

  return (
    <Provider value={{ state, _getActivities, loadMore }}>{children}</Provider>
  );
};
