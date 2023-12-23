import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddle) =>
    getDefaultMiddle().concat(apiSlice.middleware),
});

export default store;
