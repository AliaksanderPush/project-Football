export const usersAuth = (state) => state.authReducer.user;
export const userEnter = (state) => state.authReducer;
export const error = (state) =>state.AppReducer.error;
export const videoMatchs = (state) =>state.footVidReducer.matches;
export const filterMatch = state => state.chooseChampReducer.index;