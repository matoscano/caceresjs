import { takeEvery } from "redux-saga/effects";
import * as ACTION_TYPE from "../actions/types";
import { getTodosWorker } from "./todosWorker";

export default function* todosWatcher() {
  yield takeEvery(ACTION_TYPE.GET_TODOS_REQUEST, getTodosWorker);
}
