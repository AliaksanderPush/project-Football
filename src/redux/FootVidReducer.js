import { VIDEO_MATCHES_LOAD } from "./types";

const initialState = {
  matches: [],
};

export const footVidReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIDEO_MATCHES_LOAD:
      return {
        ...state,
        matches: action.data,
      };
    default:
      return state;
  }
};
