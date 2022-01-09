import { CHOOSE_CHAMP } from "./types";
const initialState = {
  index: "",
};

export const chooseChampReducer = (state = initialState, action) => {
  console.log("chooseChampReducer>>", action);
  switch (action.type) {
    case CHOOSE_CHAMP:
      return {
        ...state,
        index: action.champ,
      };
    default:
      return state;
  }
};
