import React from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { changeAuth } from "../actions/index";
import NavbarHeader from "./NavbarHeader";
import { Container } from "react-bootstrap";

function App() {
  const dispatch = useDispatch();

  const handleChangeAuth = (isLoggedIn) => {
    dispatch(changeAuth(isLoggedIn));
  };

  return (
    <div>
      <NavbarHeader handleChangeAuth={handleChangeAuth} />
      <Container style={{ paddingTop: "20px" }}>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
