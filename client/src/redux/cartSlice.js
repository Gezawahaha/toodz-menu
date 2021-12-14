import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: "cart",
    initialState:{
        table_id: '',
        name: 'Lorem Ipsum',
        totalOrder: 0,
        itemCount: 0,
        items: {},
    },
    reducers: {
        addItem: (state, action) =>{
            const item = state.items[action.payload.food_id];
            //console.log("food id:", action.payload)
            //console.log("cartSlice ",state.items[action.payload.food_id]);
            if(item === undefined){
                state.items[action.payload.food_id] = {
                    food_id: action.payload.food_id,
                    qty: 1,
                };
            }else {
                item.qty++;
            }
            state.itemCount++;
            
            state.totalOrder = state.totalOrder +action.payload.price; 
        },
        addTableid: (state , action) => {
            state.table_id = action.payload.table_id;
            //console.log("ID CART SLICE",action.payload.table_id);
        },

        removeItem: (state , action) => {
            const item = state.items[action.payload.food_id];
            if (item === undefined ) return;
            item.qty === 1 ? delete state.items[action.payload.food_id] : item.qty--;
            state.itemCount--;
            state.totalOrder = state.totalOrder - action.payload.price;
        },

        
    }
});

export const { addItem, removeItem, addTableid} = cartSlice.actions;
export const selectTableid = (state) => state.cart.table_id;
export const selectCartItem = (state) => state.cart.items;
export const selectCartCount = (state) => state.cart.itemCount;
export const selectTotalOrder = (state) => state.cart.totalOrder;
export default cartSlice.reducer;