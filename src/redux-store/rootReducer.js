import { combineReducers } from "redux";
import todos from './todos/todoReducer'
import visibilityFilter from './todoVisibility/todoVisibilityReducer'

export default combineReducers({ todos:todos, visibilityFilter:visibilityFilter });

