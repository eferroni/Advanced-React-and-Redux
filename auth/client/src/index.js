import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Welcome from "./components/Welcome";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Feature from "./components/Feature";
import SignOut from "./components/auth/SignOut";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import thunk from "redux-thunk";

const container = document.getElementById("root");
const root = createRoot(container);
const preloadedState = {
  auth: { authenticated: localStorage.getItem("token") },
};

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
  preloadedState,
});

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Welcome />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="feature" element={<Feature />} />
          <Route path="signout" element={<SignOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
