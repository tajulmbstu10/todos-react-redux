import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  DELETE_COMPLETE_TODO,
  UPDATE_TODO,
  SET_TODO_EDITING_STATUS
} from "./todoType";

const initialState = [];
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(state);
      return [
        ...state,
        {
          id: action.id,
          content: action.content,
          completed: false,
          editing: false
        }
      ];
    case TOGGLE_TODO:
      console.log(state);
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case DELETE_COMPLETE_TODO:
      return state.filter(todo => !todo.completed);
    case UPDATE_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, content: action.content, editing: !todo.editing }
          : todo
      );
    case SET_TODO_EDITING_STATUS:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, editing: !todo.editing } : todo
      );
    default:
      console.log(state);
      return state;
  }
};

export default todos;
