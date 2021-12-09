import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: "cart",
    initialState:{
        itemCount: 0,
        items: {},
    },
    reducers: {
        addItem: (state, action) =>{
            const item = state.items[action.payload.food_id];
            if(item === undefined){
                state.items[action.payload.food_id] = {
                    food_id: action.payload.food_id,
                    qty: 1,
                };
            }else {
                item.qty++;
            }
            state.itemCount++;
        },

        removeItem: (state , action) => {
            const item = state.items[action.payload.food_id];
            if (item === undefined ) return;
            item.qto === 1 ? delete state.items[action.payload.food_id] : item.qty--;
            state.itemCount--;
        },
    }
});

export const { addItem, removeItem} = cartSlice.actions;
export const selectCartItem = (state) => state.cart.items;
export const selectCartCount = (state) => state.cart.itemCount;
export default cartSlice.reducer;