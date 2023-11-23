import { configureStore } from "@reduxjs/toolkit";
import User from './Slices/User'

const Store = configureStore({
    reducer : {
        user : User.reducer,
    }
})

export default Store;