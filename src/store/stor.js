import { action, createStore } from "easy-peasy";

export const stor = createStore({
  LiveInfo: "",
  addInfo: action((state, payload) => {
    state.LiveInfo = payload;
  }),
});
