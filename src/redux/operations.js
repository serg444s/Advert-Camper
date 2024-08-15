import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://662676df052332d55322f58b.mockapi.io";

// export const fetchCampers = createAsyncThunk(
//   "campers/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get("/campers");
//       console.log("response", response);
      
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const fetchCampers = createAsyncThunk('campers/fetchCampers', async (_, thunkAPI) => {
  try {
  const response = await axios.get('https://662676df052332d55322f58b.mockapi.io/campers');
  return response.data;
  } catch (e) { 
    return thunkAPI.rejectWithValue(e.message);
  }
});