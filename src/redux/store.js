import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/product/cartSlice.js";
import productReducer from "./features/product/productSlice.js";
// import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        cart: cartReducer, 
        product: productReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
