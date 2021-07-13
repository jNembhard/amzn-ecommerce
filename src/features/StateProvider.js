import React, { createContext, useContext, useReducer } from "react";

// Preps dataLayer
export const StateContext = createContext();

// Wraps app and provides the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pulls info from the data layer
export const useStateValue = () => useContext(StateContext);
