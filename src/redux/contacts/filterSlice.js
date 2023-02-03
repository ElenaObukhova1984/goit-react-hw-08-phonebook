import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  letters: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    onFilter(state, action) {
      state.letters = action.payload;
    },
  },
});

export const { onFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

