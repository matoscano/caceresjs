import { fork, all } from "redux-saga/effects";

import watchAndLog from "./loggerSaga";

function* rootSaga() {
  yield all([fork(watchAndLog)]);
}

export default rootSaga;
