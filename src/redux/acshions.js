import axios from "axios";
import { VIDEO_MATCH_LIFE } from "./types";

import {
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
  FILTER_CHAMP,
  GET_SERVER_AUTH,
  USER_ENTER,
  USER_LEFT
} from "./types";

export function myUseAxios({ url, types }) {
  console.log("url", url);
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
export function getInfo() {
  return async (dispatch) => {
    const url = "https://fe.it-academy.by/AjaxStringStorage2.php";
    let sp = new URLSearchParams();
    sp.append("f", "READ");
    sp.append("n", "PUSHNOV_PROJECT_FOOTBALL");

    try {
      let response = await fetch(url, { method: "post", body: sp });
      let data = await response.json();
      dispatch({
        type: GET_SERVER_AUTH,
        auth: JSON.parse(data.result),
        ented: true
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
    ented: userEnt
  };
}

export function userLeft() {
  return {
    type: USER_LEFT,
    auth: false,
    ented: false, 
    
  };
}