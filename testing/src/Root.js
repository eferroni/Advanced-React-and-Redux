import React from "react";
import { Provider } from "react-redux";
import reducers from "reducers";
import { configureStore } from "@reduxjs/toolkit";
import async from "middlewares/async";
import stateValidator from "middlewares/stateValidator";

const Root = ({ children, preloadedState = {} }) => {
  return (
    <Provider
      store={configureStore({
        reducer: reducers,
        preloadedState,
        middleware: [async, stateValidator],
      })}
    >
      {children}
    </Provider>
  );
};

export default Root;
