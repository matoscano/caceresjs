import { fork, all } from "redux-saga/effects";

import watchAndLog from "./loggerSaga";
import todosWatcher from "./todosWatcher";

function* rootSaga() {
  yield all([fork(watchAndLog), fork(todosWatcher)]);
}

export default rootSaga;
