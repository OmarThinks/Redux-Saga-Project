import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import counterReducer, {
  counterSelector,
} from "./features/counter/counterSlice";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { helloSaga } from "./sagas/helloSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMeddleWare) =>
    getDefaultMeddleWare().concat(sagaMiddleware),
});

sagaMiddleware.run(helloSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

// hooks
const useCounter = () => useAppSelector(counterSelector);

export default store;
export { useAppDispatch, useAppSelector, useCounter };
export type { AppDispatch, RootState };
