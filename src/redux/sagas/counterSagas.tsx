import { put, takeEvery } from "redux-saga/effects";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* increment() {
  yield put({ type: "INCREMENT" });
}

function* decrement() {
  yield put({ type: "DECREMENT" });
}

function* incrementByValue(value: number) {
  yield put({ type: "INCREMENT_BY_VALUE", value });
}

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

function* watchIncrement() {
  yield takeEvery("INCREMENT", increment);
}
function* watchDecrement() {
  yield takeEvery("DECREMENT", increment);
}
function* watchIncrementByValue() {
  yield takeEvery("INCREMENT_BY_VALUE", incrementByValue);
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export {
  decrement,
  increment,
  incrementAsync,
  incrementByValue,
  watchDecrement,
  watchIncrement,
  watchIncrementAsync,
  watchIncrementByValue,
};
