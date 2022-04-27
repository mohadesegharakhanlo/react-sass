import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null
}

export const ProductModelSlice = createSlice({
    name : 'productModel',
    initialState,
    reducers : {
        set: (state , action) => {
            state.value = action.payload;
        },
        remove : (state) => {
            state.value = null;
        }
    }
});

export const {set , remove } = ProductModelSlice.actions;
export default ProductModelSlice.reducer;