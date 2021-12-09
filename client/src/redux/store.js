import {configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import restoReducer from './restoSlice'

export default configureStore({
    reducer:{
        cart: cartReducer,
        resto: restoReducer,
    }
});