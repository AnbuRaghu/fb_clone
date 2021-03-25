import React, { createContext, useContext, useReducer } from "react";

//we prepare the data layer (store)

export const StateContext = createContext();
//here we wrap  the app

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// to pulll something from data layer we use this hook

export const useStateValue = () => useContext(StateContext);
