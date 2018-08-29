import createStore from "stockroom/worker";
import { actions } from "./actions/index";

const store = createStore({
  count: 0
});

store.registerActions(actions);

// used for stockroom/inline as a fallback
export default store;
