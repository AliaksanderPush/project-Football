import {
  POST_SERVER_REGISTRATION,
  POST_SERVER_AUTH,
  SERVER_LOGOUT,
  USER_ENTER,
  USER_LEFT,
  GET_USER_LOAD,
} from "./types";

const initialState = {
  user: [],
  ented: false,
};

export const authReducer = (state = initialState, action) => {
  console.log("action>>>", action);
  switch (action.type) {
    case POST_SERVER_AUTH || GET_USER_LOAD || POST_SERVER_REGISTRATION:
      return {
        ...state,
        user: action.auth,
        ented: action.ented,
      };
    case SERVER_LOGOUT:
      return {
        ...state,
        user: {},
        ented: false,
      };

    case USER_ENTER:
      return {
        ...state,
        user: action.auth,
        ented: action.ented,
      };
    case USER_LEFT:
      return {
        ...state,
        user: "",
        ented: false,
      };

    default:
      return state;
  }
};
