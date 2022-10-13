import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import logReducer from "./Log"

const store  = configureStore ({
    reducer:{
        cart:cartReducer,
        log:logReducer
    }
})

export default store