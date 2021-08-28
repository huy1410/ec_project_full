import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import accountApi from "../../api/acountApi";
export const fetchchart = createAsyncThunk("Chart/fetChart", async () => {
  let token = sessionStorage.getItem("token");
  const response = await axios
  .get("http://127.0.0.1:8000/api/account/genchart", {
    headers: {
      'Authorization': `Bearer ${token}`
    },
  })
  return response.data;
});
const initialState = {
  chart: [],
  isLoading: false,
};
export const ChartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchchart.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchchart.fulfilled]: (state, action) => {
      state.chart = action.payload;
      state.isLoading = false;
    },
    [fetchchart.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { setProduct } = filmSlice.actions;

export default ChartSlice.reducer;
