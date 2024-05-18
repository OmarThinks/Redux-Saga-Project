import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    incrementAsync: (state, action: PayloadAction<number>) => {},
  },
});

const counterReducer = counterSlice.reducer;

// Action creators are generated for each case reducer function
const { increment, decrement, incrementByAmount, incrementAsync } =
  counterSlice.actions;

const counterSelector = (state: RootState) => state.counter.value;

export {
  counterSelector,
  counterSlice,
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
};
export type { CounterState };
export default counterReducer;
