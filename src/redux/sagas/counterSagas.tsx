import { put, takeEvery } from "redux-saga/effects";
import { increment } from "../features/counter/counterSlice";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
  yield delay(1000);
  yield put(increment());
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
  yield takeEvery(incrementAsync, incrementAsync);
}

export { watchIncrementAsync };
