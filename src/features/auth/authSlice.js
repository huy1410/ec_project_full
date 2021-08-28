import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
// localStorage.getItem("token") ||
const initialState = {
  token: sessionStorage.getItem("token") || null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      sessionStorage.setItem("token",action.payload.access_token)
      state.token = action.payload?.access_token;
      state.loading = false;
    },
    loginFail(state, action) {
      state.error = "Lỗi đăng nhập sai ";
      state.loading = false;
    },
    isPending(state) {
      state.loading = true;
    },
    logout(state, action) {
      state.token = null;
    },
  },
});

export const { loginSuccess, loginFail, logout, isPending } = authSlice.actions;

export const login =
  ({ username, password }) =>
  async (dispatch) => {
    dispatch(isPending());
    const res = await axios
      .post("http://127.0.0.1:8000/api/auth/login", {
        username,
        password,
      })
      .then((res)=> {
      
        dispatch(loginSuccess(res.data));
      })
      .catch((error)=> {
        console.log(error);
        dispatch(loginFail(error));
      
      });
  };

export default authSlice.reducer;
