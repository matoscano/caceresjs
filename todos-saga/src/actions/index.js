import * as ACTION_TYPE from "./types";
const uuidv4 = require("uuid/v4");

export const addTodo = text => ({
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

export const setError = error => ({
  type: ACTION_TYPE.SET_ERROR,
  payload: error
});

export const getTodos = () => ({
  type: ACTION_TYPE.GET_TODOS_REQUEST
});
