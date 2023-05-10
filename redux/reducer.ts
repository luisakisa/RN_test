import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface PatternsState {
  value: number;
}

const initialState: PatternsState = {
  value: 0,
};

export const patternsSlice = createSlice({
  name: 'patterns',
  initialState,
  reducers: {
    changeActivePattern: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeActivePattern} = patternsSlice.actions;

export default patternsSlice.reducer;

export type PatternReducer = ReturnType<typeof patternsSlice.reducer>;
