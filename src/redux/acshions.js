import {
  loginAuth,
  registartionServer,
  logoutSite,
} from "./acshionsServer/AuthService";
import axios from "axios";
import { VIDEO_MATCH_LIFE } from "./types";

import {
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
  FILTER_CHAMP,
  POST_SERVER_AUTH,
  POST_SERVER_REGISTRATION,
  SERVER_LOGOUT,
  USER_ENTER,
  USER_LEFT,
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
/*
export function getInfo() {
  return async (dispatch) => {
    const url = "https://fe.it-academy.by/AjaxStringStorage2.php";
    let sp = new URLSearchParams();
    sp.append("f", "READ");
    sp.append("n", "PUSHNOV_PROJECT_FOOTBALL");

    try {
      let response = await fetch(url, { method: "post", body: sp });
      let data = await response.json();
      const res = JSON.parse(data.result);
      dispatch({
        type: GET_SERVER_AUTH,
        auth: res,
        ented: true,
      });
    } catch (error) {
      dispatch(errorOn());
      console.error(error);
      dispatch(loaderOff());
    }
  };
}
*/
export function login(email, password) {
  return async (dispatch) => {
    try {
      const response = await loginAuth(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      dispatch({
        type: POST_SERVER_AUTH,
        auth: response,
        ented: true,
      });
    } catch (error) {
      dispatch(errorOn());
      console.error(error);
      dispatch(loaderOff());
    }
  };
}

export function registration({ email, password }) {
  return async (dispatch) => {
    try {
      const response = await registartionServer(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      dispatch({
        type: POST_SERVER_REGISTRATION,
        auth: response,
        ented: true,
      });
    } catch (error) {
      dispatch(errorOn());
      console.error(error);
      dispatch(loaderOff());
    }
  };
}
export function logout({ email, password }) {
  return async (dispatch) => {
    try {
      const response = await logoutSite(email, password);
      console.log(response);
      localStorage.removeItem("token");
      dispatch({
        type: SERVER_LOGOUT,
        auth: response,
        ented: false,
      });
    } catch (error) {
      dispatch(errorOn());
      console.error(error);
      dispatch(loaderOff());
    }
  };
}

export function userEnter(userName, userEnt) {
  return {
    type: USER_ENTER,
    auth: userName,
    ented: userEnt,
  };
}

export function userLeft() {
  return {
    type: USER_LEFT,
    auth: false,
    ented: false,
  };
}
