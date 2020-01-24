import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  DELETE_COMPLETE_TODO,
  UPDATE_TODO,
  SET_TODO_EDITING_STATUS
} from "./todoType";

let nextId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  id: nextId++,
  content
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const deleteCompleteTodo = () => ({
  type: DELETE_COMPLETE_TODO
});

export const updateTodo = (id, content) => ({
  type: UPDATE_TODO,
  id,
  content
});

export const setEditStatus = id => ({
  type: SET_TODO_EDITING_STATUS,
  id
});
