import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import accountApi from "../../api/acountApi";
export const fetchUser = createAsyncThunk("user/fetUser", async () => {
  let token = sessionStorage.getItem("token");
  const response = await axios
  .get("http://127.0.0.1:8000/api/account", {
    headers: {
      'Authorization': `Bearer ${token}`
    },
  })
  return response.data;
});
export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  let token = sessionStorage.getItem("token");
  const response = await axios
  .delete(`http://127.0.0.1:8000/api/account/delete/${id} `, {
    headers: {
      'Authorization': `Bearer ${token}`
    },
  })
  return response.data;
});
const initialState = {
  data: [],
  isLoading: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    [fetchUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { setProduct } = filmSlice.actions;

export default userSlice.reducer;
