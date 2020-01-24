import { createStore } from "redux";
import rootReducer from "./rootReducer";

const initialState = {
  todos: []
};
const store = createStore(rootReducer, initialState);

export default store;
