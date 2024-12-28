import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [], 
    quantity: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = action.payload;            
            const existingItem = state.carts.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                existingItem.itemQuantity += 1;                
            } else {
                state.carts.push({ ...item, itemQuantity: 1,message:'hyy'});                   
            }
            
            state.quantity = state.quantity+1;
        },
        removeFromCart(state, action) {
            const itemId = action.payload;
            const existingItem = state.carts.find(cartItem => cartItem.id === itemId.id);
        
            if (existingItem) {
                if (existingItem.itemQuantity > 0 && state.quantity > 0) {
                    existingItem.itemQuantity -= 1;
                    state.quantity -= 1;
        
                    if (existingItem.itemQuantity === 0) {
                        state.carts = state.carts.filter(cartItem => cartItem.id !== itemId.id);
                    }
                } else {
                    state.carts = state.carts.filter(cartItem => cartItem.id !== itemId.id);
                }
            }
        },
        
        clearAllCart(state) {
            state.carts = [];
            state.quantity = 0;
        }
    }
});

export const { addToCart, removeFromCart, clearAllCart } = cartSlice.actions;
export default cartSlice.reducer;
