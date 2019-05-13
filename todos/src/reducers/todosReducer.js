import { Action, Store } from "redux";

const INITIAL_STATE = {
  todos: []
};

const todosReducer = (state: Store = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    default:
      return state;
  }
};

export default todosReducer;
