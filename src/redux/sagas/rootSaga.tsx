import { all } from "redux-saga/effects";
import { watchIncrementAsync } from "./counterSagas";
import { helloSaga } from "./helloSaga";

function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}

export default rootSaga;
