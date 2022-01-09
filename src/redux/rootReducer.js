import { combineReducers } from "redux";
import { footVidReducer } from "./FootVidReducer";
import { matchLiveReducer } from "./MatchLiveReducer";
import { AppReducer } from "./appReducer";

export const rootReducer = combineReducers({
  footVidReducer,
  matchLiveReducer,
  AppReducer,
});
