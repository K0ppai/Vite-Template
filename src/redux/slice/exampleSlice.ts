import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const URL = "https://api.opendota.com/api/heroStats";

export const fetchSth = createAsyncThunk("sth/fetchSth", async () => {
  const response = await axios.get(URL);
  return response.data;
});

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSth.pending, (state) => ({
      ...state,
      status: "loading",
    }));
    builder.addCase(fetchSth.fulfilled, (state, action) => ({
      ...state,
      status: "succeeded",
      data: action.payload,
    }));
  },
});

export default exampleSlice.reducer;