import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    total: 0,
    carts: [],
    carts1: []
}

//cart slice
const cartSlice = createSlice({
    name: 'cartsSlice',
    initialState,
    reducers:{
        //add to cart
        addToCart:(state, action)=> {
            const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
            state.total = state.total + action.payload.price;
            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qnty += 1
            } else {
                const temp = { ...action.payload, qnty: 1 }
                state.carts = [...state.carts, temp]

            }
        },

       

        //deleting single item from cart 
        removeToCart:(state, action)=> {
            const data = state.carts.filter((ele)=>ele.id !== action.payload);
            console.log("after deleting item", data)
            state.carts = data;
        },

        removeProduct: (state, action) => {
            const ItemIndex_desc = state.carts.findIndex((item) => item.id === action.payload.id);
            state.total = state.total - action.payload.price;
            if(state.carts[ItemIndex_desc].qnty >= 1) {
                const dltiteams = state.carts[ItemIndex_desc].qnty -= 1

            }else if(state.carts[ItemIndex_desc].qnty === 1){
               const data = state.carts.filter((e)=>e.id !== action.payload)
            }
        },


        //for clearing cart
        emptyCartItems:(state, action)=> {
            state.carts=[]
        },


        testing:(state, action)=> {
            state.carts1 = [...state.carts1, action.payload];
            console.log("Testing", state.carts1)
        }
    }
})

export const {addToCart, emptyCartItems, removeToCart, removeProduct, testing} = cartSlice.actions;

export default cartSlice.reducer;