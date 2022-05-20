import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import Root from "Root";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<CommentList />} />
            <Route path="post" element={<CommentBox teste="success" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Root>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
