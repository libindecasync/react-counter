import React, { createContext, useReducer, useContext } from "react";
import { reducer, initialState } from "./reducer";

const CountContext = createContext();

export function CountProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}
