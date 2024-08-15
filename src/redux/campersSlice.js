import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

// const campersSlice = createSlice({
//   name: "campers",
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCampers.pending, handlePending)
//       .addCase(fetchCampers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchCampers.rejected, handleRejected)
//   },
// });

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
  campers: [],
 loading: false,
 error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // state.campers = action.payload;
        state.campers = [...state.campers, ...action.payload];
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export default campersSlice.reducer;

export const campersReducer = campersSlice.reducer;