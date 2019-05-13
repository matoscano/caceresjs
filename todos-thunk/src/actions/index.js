import * as ACTION_TYPE from "./types";
const uuidv4 = require("uuid/v4");

export const addTodo = text => dispatch =>
  dispatch({
    type: ACTION_TYPE.ADD_TODO,
    payload: { id: uuidv4(), text, completed: false }
  });

export const setVisibilityFilter = filter => ({
  type: ACTION_TYPE.SET_VISIBILITY_FILTER,
  filter
});

export const toggleTodo = id => ({
  type: ACTION_TYPE.TOGGLE_TODO,
  id
});

export const setLoading = loading => ({
  type: ACTION_TYPE.SET_LOADING,
  payload: loading
});

export const setTodos = todos => ({
  type: ACTION_TYPE.SET_TODOS,
  payload: todos
});

export const saveTodosInLocalStorage = todos => {
  return (dispatch, getState) => {
    if (todos) {
      dispatch(setLoading(true));
      localStorage.setItem("todos", JSON.stringify(todos));
      dispatch(setLoading(false));
    }
  };
};

export const checkTodosInLocalStorage = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    const todos = await localStorage.getItem("todos");
    if (!todos) {
      dispatch(setTodos([]));
      dispatch(setLoading(false));
      return;
    } else {
      const todosFromLocalStorage = JSON.parse(todos);
      dispatch(setTodos(todosFromLocalStorage));
      dispatch(setLoading(false));
    }
  };
};
