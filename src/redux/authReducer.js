import { GET_SERVER_AUTH } from "./types";

const initialState = {
  user: [],
};

export const authReducer = (state = initialState, action) => {
  console.log("auth>>>", action.auth);
  switch (action.type) {
    case GET_SERVER_AUTH:
      return {
        ...state,
        user: action.auth,
      };
    default:
      return state;
  }
};
