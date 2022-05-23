import axios from "axios";
import { AUTH_USER, AUTH_ERROR, AUTH_REQUEST } from "./types";

export const signup = (formProps, callback) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REQUEST });

    const response = await axios.post(
      "http://localhost:3090/signup",
      formProps
    );

    localStorage.setItem("token", response.data.token);

    dispatch({
      type: AUTH_USER,
      payload: response.data.token,
    });

    callback();
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Somethin wrong occur :-(!",
    });
  }
};

export const signout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: "",
  };
};

export const signin = (formProps, callback) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REQUEST });

    const response = await axios.post(
      "http://localhost:3090/signin",
      formProps
    );

    localStorage.setItem("token", response.data.token);

    dispatch({
      type: AUTH_USER,
      payload: response.data.token,
    });

    callback();
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Somethin wrong occur :-(!",
    });
  }
};
