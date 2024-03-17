import React, {
  createContext,
  ReactNode,
  useEffect,
  Dispatch,
  useReducer,
} from "react";
import StateReducer from "./Reducers";

interface Props {
  children: ReactNode;
}

const initialState = {
  menuOpen: false as boolean,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(StateReducer, {
    ...initialState,
  });

  const contextValue = {
    ...state,
    dispatch,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
