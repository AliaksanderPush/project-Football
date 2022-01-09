import {
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
} from "./types";

const initialState = {
  loading: false,
  error: false,
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_DISPLAY_ON:
      return {
        ...state,
        loading: true,
      };
    case LOADER_DISPLAY_OFF:
      return {
        ...state,
        loading: false,
      };
    case ERROR_DISPLAY_ON:
      return {
        ...state,
        error: true,
      };
    case ERROR_DISPLAY_OFF:
      return {
        ...state,
        error: false,
      };

    default:
      return state;
  }
};
