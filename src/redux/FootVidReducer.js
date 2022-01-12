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
    // case FILTER_CHAMP:
    //   const { liga } = action;
    //   const { matches } = state;
    //   const filterMatches = matches.filter((item) => item.competition === liga);

    //  return {
    //    ...state,
    //    matches: filterMatches,
    //  };

    default:
      return state;
  }
};
