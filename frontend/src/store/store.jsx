import { configureStore } from "@reduxjs/toolkit";
import userSlice  from "../store/reducers/userSlice";
import  cartSlice from "../store/reducers/cartSlice";
import productSlice  from "../store/reducers/productSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    productReducer: productSlice,
    cartReducer: cartSlice,
  },
});
