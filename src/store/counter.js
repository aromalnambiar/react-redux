import { createSlice } from "@reduxjs/toolkit";


const initialState = {counter: 0, showCounter: false}


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increament(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        showCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
})

export const counterAction = counterSlice.actions;
export default counterSlice;