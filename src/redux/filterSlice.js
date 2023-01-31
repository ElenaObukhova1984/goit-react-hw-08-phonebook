import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = '';

const filtersSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,

  reducers: {
    filterContacts(state, action) {
      return (state = action.payload)
    },
    

  },
});

export const { filterContacts } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;