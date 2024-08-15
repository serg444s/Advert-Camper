import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    equipment: "",
    type: "",

  },
  reducers: {
    changeFilter(state, action) {
      state.location = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;