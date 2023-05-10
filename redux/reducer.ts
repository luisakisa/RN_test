import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface PatternState {
  id: number;
  counter: number;
}

const initialState: PatternState = {
  id: 0,
  counter: 0,
};

export const patternSlice = createSlice({
  name: 'pattern',
  initialState,
  reducers: {
    changeActivePattern: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    incrementCounterPattern: state => {
      state.counter += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeActivePattern, incrementCounterPattern} =
  patternSlice.actions;

export default patternSlice.reducer;
export const selectPattern = (state: PatternState) => state.id;
export const selectCounter = (state: PatternState) => state.counter;
export type PatternReducer = ReturnType<typeof patternSlice.reducer>;
