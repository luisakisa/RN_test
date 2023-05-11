import {createSlice} from '@reduxjs/toolkit';

const initialState: CounterState = {
  counter: 0,
};

export interface CounterState {
  counter: number;
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounterPattern: state => {
      state.counter += 1;
    },
  },
});

export default counterSlice.reducer;
export const {incrementCounterPattern} = counterSlice.actions;
export const selectCounter = (state: CounterState) => state.counter;
