import { GET_SERVER_AUTH, USER_ENTER, USER_LEFT } from "./types";

const initialState = {
  user: [],
  ented: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVER_AUTH:
      return {
        ...state,
        user: action.auth,
        ented: true
      };
      case USER_ENTER:
        return {
          ...state,
          user: action.auth,
          ented: action.ented
        };
        case USER_LEFT:
          return {
            ...state,
           user: '',
           ented: false
          };
          

    default:
      return state;
  }
};
