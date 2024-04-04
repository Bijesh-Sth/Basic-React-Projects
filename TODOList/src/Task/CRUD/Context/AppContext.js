
import React, { createContext, useReducer, useEffect } from "react";

import { appReducer } from "../Reducer/appReducer"; // Import the reducer

// Initial state for the context
const initialState = {
  loading: false,
  error: "",
  posts: [],
  render_update: false,
  to_update: {},
  is_authenticated: false,
};

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SET_LOADING" });
      try {
        const response = await fetch("http://localhost:5000/posts/");
        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: "Something went wrong!" });
      }
    };

    fetchData();
  }, []);
  

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
