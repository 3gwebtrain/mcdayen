import { CartProps, initialCartProps } from "@mcdayen/prop-types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCartDetails = createAsyncThunk('store/cart', async () => {
    try {
        const staticData = await new Promise((resolve, _) => {
            setTimeout(() => {
                resolve('Hi there!')
            }, 1000);
        });
        return staticData;
    } catch (error:unknown) {
        throw Error(error as string);
    }
})

const initialCart: CartProps = {
    ...initialCartProps
};

export const CartSlice = createSlice({
    name: 'cart',
    initialState:initialCart,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCartDetails.fulfilled, (state, { payload }) => {
            state.title = { status: true, value: String(payload) };
        })
    }

});
export default CartSlice.reducer;