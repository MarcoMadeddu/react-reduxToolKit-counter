import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counter"
import cartReducer from "../features/Cart/cart"


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;