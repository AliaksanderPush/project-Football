import {
  loginAuth,
  registartionServer,
  logoutSite,
} from "./acshionsServer/AuthService";
import axios from "axios";
import { VIDEO_MATCH_LIFE } from "./types";
import { API_URL } from "../redux/acshionsServer/request";
import {
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
  FILTER_CHAMP,
  POST_SERVER_AUTH,
  POST_SERVER_REGISTRATION,
  USER_LOGOUT,
  GET_USER_LOAD,
} from "./types";

export function myUseAxios({ url, types }) {
  if (!url) return;
  return async (dispatch) => {
    dispatch(loaderOn());
    try {
      const response = await axios.get(url);
      dispatch({
        type: types,
        data: response.data.response,
      });
      dispatch(loaderOff());
    } catch (error) {
      dispatch(errorOn());
      console.error(error);
      dispatch(loaderOff());
    }
  };
}

export function matchSelection(info) {
  return {
    type: VIDEO_MATCH_LIFE,
    data: info,
  };
}
export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}

export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}

export function errorOff() {
  return {
    type: ERROR_DISPLAY_OFF,
  };
}
export function errorOn() {
  return {
    type: ERROR_DISPLAY_ON,
  };
}

export function filterChamp(champ) {
  return {
    type: FILTER_CHAMP,
    liga: champ,
  };
}

export function login(email, password) {
  return async (dispatch) => {
    try {
      const response = await loginAuth(email, password);
      const { data } = response;
      localStorage.setItem("token", data.accessToken);
      dispatch({
        type: POST_SERVER_AUTH,
        auth: data.user,
        ented: data.user.isActivated,
      });
    } catch (error) {
      dispatch(errorOn());
      dispatch(loaderOff());
    }
  };
}

export function registration(userName, email, password) {
  return async (dispatch) => {
    try {
      const response = await registartionServer(userName, email, password);

      const { data } = response;
      localStorage.setItem("token", data.accesToken);
      dispatch({
        type: POST_SERVER_REGISTRATION,
        auth: data.user,
        ented: data.user.isActivated,
      });
    } catch (error) {
      dispatch(errorOn());
      console.error(error);
    }
  };
}
export function logout() {
  return async (dispatch) => {
    try {
      await logoutSite();
      localStorage.removeItem("token");
      dispatch({
        type: USER_LOGOUT,
        auth: {},
        ented: false,
      });
    } catch (error) {
      dispatch(errorOn());
      console.error(error);
    }
  };
}

export function checkUser() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      const { data } = response;
      localStorage.setItem("token", data.accessToken);
      dispatch({
        type: GET_USER_LOAD,
        auth: data.user,
        ented: data.user.isActivated,
      });
    } catch (error) {
      dispatch(errorOn());
      console.error(error);
    }
  };
}
