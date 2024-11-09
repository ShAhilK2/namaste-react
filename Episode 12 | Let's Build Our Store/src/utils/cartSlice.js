import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState :{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            //Vanilla Js Dont Mutate State


            //Redux Toolkit
            //mutating the state here
            //Redux Toolkit uses immer BTS
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
            //either mutate the existing  state or return a new state
            return {items : []};

            // state.items.length =0;
        }


    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;