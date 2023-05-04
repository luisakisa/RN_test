import {PayloadAction, createReducer} from '@reduxjs/toolkit';

export const ACTIONS_TYPES = {
  CURRENT_PATTERN: 'CURRENT_PATTERN',
};

const initialState: number = 0;

const reducer = createReducer(initialState, builder => {
  builder.addCase(
    ACTIONS_TYPES.CURRENT_PATTERN,
    (state, action: PayloadAction<number>) => {
      state = action.payload;
    },
  );
});

export default reducer;
