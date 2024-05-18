import { all } from "redux-saga/effects";
import {
  watchDecrement,
  watchIncrement,
  watchIncrementAsync,
  watchIncrementByValue,
} from "./counterSagas";
import { helloSaga } from "./helloSaga";

function* rootSaga() {
  yield all([
    helloSaga(),
    watchDecrement(),
    watchIncrement(),
    watchIncrementAsync(),
    watchIncrementByValue(),
  ]);
}

export default rootSaga;
