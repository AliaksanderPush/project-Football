import { VIDEO_MATCH_LIFE } from "../redux";
const initialState = {
  match: {},
};

export const matchLiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIDEO_MATCH_LIFE:
      return {
        ...state,
        match: action.data,
      };
    default:
      return state;
  }
};
