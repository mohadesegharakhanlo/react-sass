import {configureStore} from '@reduxjs/toolkit'
import ProductMoledSlice from "./product-model/ProductMoledSlice";
import addItemsSlice from './add-to-cart/addItems';

export const store = configureStore({
    reducer : {
        productModel : ProductMoledSlice,
        addItems : addItemsSlice,
    }
})