import {createSlice} from '@reduxjs/toolkit';
import { remove } from '../product-model/ProductMoledSlice';


const initialState = {
    cartItems : [],
};


const addItemsSlice = createSlice ({
    name : "addItems",
    initialState,
    reducers : {
        add : (state , action) => {
            let duplicate = state.cartItems.find((e) => e.slug === action.payload.slug );
            if(duplicate){
                duplicate.quantity += action.payload.quantity;
            }
            else{
                return {...state , cartItems :[...state.cartItems ,  action.payload]};
            }
        },
        remove : (state , action) => {
            state.cartItems = [];

        }
    }
});

export const {add} = addItemsSlice.actions;
export default addItemsSlice.reducer;