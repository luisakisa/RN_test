import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface PatternState {
  id: number;
}

const initialState: PatternState = {
  id: 0,
};

export const patternSlice = createSlice({
  name: 'pattern',
  initialState,
  reducers: {
    changeActivePattern: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const {changeActivePattern} = patternSlice.actions;
export default patternSlice.reducer;
