import { combineReducers } from "redux";
import { footVidReducer } from "./FootVidReducer";
import { matchLiveReducer } from "./MatchLiveReducer";
import { AppReducer } from "./appReducer";
import { chooseChampReducer } from "./chooseChampReducer";

export const rootReducer = combineReducers({
  footVidReducer,
  matchLiveReducer,
  AppReducer,
  chooseChampReducer,
});
