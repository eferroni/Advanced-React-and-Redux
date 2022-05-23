import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signout } from "../../actions";

const SignOut = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signout());
  }, []);
  return <div>Sorry that you are going :-(</div>;
};

export default SignOut;
