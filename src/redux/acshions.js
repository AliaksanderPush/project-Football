import axios from "axios";
import { VIDEO_MATCH_LIFE } from "./types";

import {
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
  FILTER_CHAMP,
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
