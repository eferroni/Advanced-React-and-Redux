import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

export function commentsReducer(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];

    case FETCH_COMMENTS:
      return [...state, ...action.payload.data.map((item) => item.name)];

    default:
      return state;
  }
}
