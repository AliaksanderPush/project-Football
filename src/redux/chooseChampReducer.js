import { FILTER_CHAMP } from "./types";
const initialState = {
  index: "",
};

export const chooseChampReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CHAMP:
      return {
        ...state,
        index: action.liga,
      };
    default:
      return state;
  }
};
