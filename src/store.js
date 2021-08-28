import { configureStore } from "@reduxjs/toolkit";
import userReducer  from  './features/user/userSlice'
import detailReducer from './features/detail/detailSlice'
import authReducer from "./features/auth/authSlice";
import chartReducer from "./features/chart/chartSlice"
export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    detail : detailReducer,
    chart : chartReducer,
  },
});
