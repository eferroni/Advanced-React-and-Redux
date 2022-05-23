import { AUTH_USER, AUTH_ERROR, AUTH_REQUEST } from "../actions/types";

const INITIAL_STATE = { authenticated: "", errorMessage: "", isLoading: false };

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, isLoading: true, errorMessage: "" };
    case AUTH_USER:
      return {
        authenticated: action.payload,
        errorMessage: "",
        isLoading: false,
      };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload, isLoading: false };
    default:
      return state;
  }
};
