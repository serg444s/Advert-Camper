import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: [],
  },
  reducers: {
    changeFavorite(state, action) {
      state.favorite.push(action.payload);
    },
  },
});

export const { changeFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;