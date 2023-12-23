import { createSlice } from "@reduxjs/toolkit";
import updatecart from "../utils/updatecart";
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItem: [], shippingAddres: {}, paymentMethod: "stripe" };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart(state, action) {
      const item = action.payload;
      const existItem = state.cartItem.find((x) => x._id === item._id);
      if (existItem) {
        state.cartItem = state.cartItem.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItem = [...state.cartItem, item];
      }
      return updatecart(state);
    },

    removeFromCart(state, action) {
      state.cartItem = state.cartItem.filter(
        (item) => item._id !== action.payload
      );
      return updatecart(state);
    },
    saveShippingAddress(state, action) {
      state.shippingAddres = action.payload;
      return updatecart(state);
    },
    savePaymentMethod(state, action) {
      state.paymentMethod = action.payload;
      return updatecart(state);
    },
    clearCartItem(state) {
      state.cartItem = [];
      return updatecart(state);
    },
  },
});

export const {
  addTocart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
} = cartSlice.actions;
export default cartSlice.reducer;
