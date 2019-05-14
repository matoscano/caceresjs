import { take, select } from "redux-saga/effects";

export default function* watchAndLog() {
  while (true) {
    const action = yield take("*");
    const state = yield select();

    console.log("action", action);
    console.log("state after", state);
  }
}
