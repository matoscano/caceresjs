import { Action, Store } from "redux";
import * as ACTION_TYPE from "../actions/types";

const INITIAL_STATE = {
  todos: [],
  loading: false,
  error: null
};

const todosReducer = (state: Store = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case ACTION_TYPE.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case ACTION_TYPE.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case ACTION_TYPE.SET_TODOS:
      return {
        ...state,
        todos: [...action.payload]
      };
    default:
      return state;
  }
};

export default todosReducer;
