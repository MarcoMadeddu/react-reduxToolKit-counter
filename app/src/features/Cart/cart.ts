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
        name: 'first',
        price: 4
    },
    {
        name: 'second',
        price: 1
    },
]

const initialState: cartState = {
    elements: cartMock,
    total: 5
}



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addElement(state, action: PayloadAction<cartState>) {
            state.total += action.payload.total;
            state.elements = [...state.elements, ...action.payload.elements]
        }
    }
})

export const { addElement } = cartSlice.actions;
export default cartSlice.reducer;

