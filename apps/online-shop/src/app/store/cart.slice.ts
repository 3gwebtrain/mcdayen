import { CartProps, mockResponseCartProps } from "@mcdayen/prop-types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCartDetails = createAsyncThunk('store/cart', async () => {
    try {
        const staticData = await new Promise((resolve, _) => {
            setTimeout(() => {
                resolve(mockResponseCartProps)
            }, 1000);
        });
        return staticData as CartProps;
    } catch (error: unknown) {
        throw Error(error as string);
    }
});

export interface RootStoreProps {
    product:CartProps
}

const initialCart:RootStoreProps  = {
    product: { ...mockResponseCartProps }
};

export const CartSlice = createSlice({
    name: 'cart',
    initialState:initialCart,
    reducers: {
        sizeHandler: (state, { payload }) => {
            const { sizeSelected, sizeLabels } = { ...state.product };
            sizeSelected.value = payload.size;
            //need to move in to helper lib.
            const updated = sizeLabels.value.map(item => {
                if (item.id === payload.id) {
                    item.isSelected = true
                } else {
                    item.isSelected = false
                }
                
                return item;
            });
            state.product.sizeLabels.value = updated;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCartDetails.fulfilled, (state, {payload}) => {
            state = { ...state, ...payload } ;
        })
    }

});
export const { sizeHandler } =  CartSlice.actions;
export default CartSlice.reducer;