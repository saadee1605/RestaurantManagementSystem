import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./StoreSlice/CartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default store;
