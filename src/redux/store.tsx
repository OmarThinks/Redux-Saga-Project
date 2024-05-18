import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import counterReducer, {
  counterSelector,
} from "./features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

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
