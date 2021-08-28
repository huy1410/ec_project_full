import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUsers = createAsyncThunk("details", async (id) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/${id}"
  );
  return response.data;
});
const initialState = {
  data: [],
  isLoading: false,
};
export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { setProduct } = filmSlice.actions;

export default detailSlice.reducer;
