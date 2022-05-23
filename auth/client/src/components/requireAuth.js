import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const requireAuth = (ChildComponent) => {
  const ComposedComponent = (props) => {
    let navigate = useNavigate();

    const isLoggedIn = useSelector((state) => state.auth.authenticated);

    useEffect(() => {
      if (!isLoggedIn) {
        navigate("/");
      }
    }, [isLoggedIn, navigate]);

    return <ChildComponent {...props} />;
  };

  return ComposedComponent;
};

export default requireAuth;
