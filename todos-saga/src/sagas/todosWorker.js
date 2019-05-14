import { put, call } from "redux-saga/effects";
import axios from "axios";
import { setLoading, setTodos, setError } from "../actions";

export function getTodosFromServer() {
  return axios
    .get("https://caceresjs.free.beeceptor.com")
    .then(response => ({ response }))
    .catch(error => ({ error }));
}

export function* getTodosWorker() {
  yield put(setLoading(true));
  yield put(setError(null));
  const { response, error } = yield call(getTodosFromServer);
  if (response) {
    const todos = response.data.todos;
    yield put(setTodos(todos));
  } else {
    yield put(setTodos([]));
    yield put(setError("Error loading todos!"));
    console.log(error);
  }
  yield put(setLoading(false));
}
