import stateSchema from "./stateSchema";
import tv4 from "tv4";

const stateValidator =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    next(action);

    if (!tv4.validate(getState(), stateSchema)) {
      console.warn("Invalid state schema detected!");
    }
  };

export default stateValidator;
