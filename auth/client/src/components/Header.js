import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <div>
      <Link to="/" style={{ margin: "0px 10px" }}>
        Redux Auth
      </Link>
      {!authenticated ? (
        <>
          <Link to="/signup" style={{ margin: "0px 10px" }}>
            Sign Up
          </Link>
          <Link to="/signin" style={{ margin: "0px 10px" }}>
            Sign In
          </Link>
        </>
      ) : (
        <>
          <Link to="/signout" style={{ margin: "0px 10px" }}>
            Sign Out
          </Link>
          <Link to="/feature" style={{ margin: "0px 10px" }}>
            Feature
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
