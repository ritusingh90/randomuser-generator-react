import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";

// crete stoe
export const store = configureStore ({
    reducer:{
        allCart:cartSlice
    }
})