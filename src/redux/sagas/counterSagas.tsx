import { put, takeEvery } from "redux-saga/effects";
import { increment, incrementAsync } from "../features/counter/counterSlice";
import { PayloadAction } from "@reduxjs/toolkit";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// Our worker Saga: will perform the async increment task
function* incrementAsyncSaga(action: PayloadAction<number>) {
  yield delay(action.payload);
  yield put(increment());
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
  yield takeEvery(incrementAsync.type, incrementAsyncSaga);
}

export { watchIncrementAsync };
