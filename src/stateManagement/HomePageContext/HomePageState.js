import React, { createContext, useReducer } from "react";
import { GET_ACTIVITIES } from "./HomePageTypes";

// Initil state
const initialState = {
  activities: [],
  loading: true,
  page: 0,
  limit: 10,
  offset: 0,
  totalcount: 0,
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
        activities: [...state.activities, ...action.payload.data],
        page: action.payload.page,
        limit: action.payload.limit,
        offset: action.payload.offset,
        totalcount: action.payload.totalcount,
      };

    default:
      return state;
  }
};

// Exposes the properties of the context to the child components
export const HomepageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Get activities
  const _getActivities = () => {
    // Add logic api ...
  };

  return <Provider value={{ state, _getActivities }}>{children}</Provider>;
};
