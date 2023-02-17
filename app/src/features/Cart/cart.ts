import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type element = {
    name: string;
    price: number
}

export type cartState = {
    elements: element[];
    total: number
}

export const cartMock: element[] = [
    {
        name: 'mela',
        price: 2
    },
]

const initialState: cartState = {
    elements: cartMock,
    total: 2
}



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addSingleElement(state, action: PayloadAction<element>) {
            const newItem: element = { name: action.payload.name, price: action.payload.price }
            state.total += action.payload.price;
            state.elements = [...state.elements, newItem]
        },
    }
})

export const { addSingleElement } = cartSlice.actions;
export default cartSlice.reducer;

