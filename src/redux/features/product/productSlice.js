import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";
import { toast } from "react-toastify";

const initialState = {
    product: null,
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    messsage: ""
}

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async(_, thunkAPI) => {
        try {
            return await productService.getProducts()
        } catch (error) {
          const message = 
          (error.response &&
            error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString();
        console.log(message);
        return thunkAPI.rejectWithValue(message)  
        }
    }
)

export const getProduct = createAsyncThunk(
    "products/getProduct",
    async(id, thunkAPI) => {
        try {
            return await productService.getProduct(id)
        } catch (error) {
          const message = 
          (error.response &&
            error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString();
        console.log(message);
        return thunkAPI.rejectWithValue(message)  
        }
    }
)


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading =false;
            state.isSuccess = true;
            state.isError =false;
            console.log(action.payload);
            state.products = action.payload;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.messsage = action.payload;
            toast.error(action.payload);
        })

        .addCase(getProduct.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getProduct.fulfilled, (state, action) => {
            state.isLoading =false;
            state.isSuccess = true;
            state.isError =false;
            console.log(action.payload);
            state.product = action.payload;
        })
        .addCase(getProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.messsage = action.payload;
            toast.error(action.payload);
        })
    }
})


export default productSlice.reducer;