
import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialCounterState = {counter: 0, showCounter: false}


const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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


const initialAuthState = {isAuth: false}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;
        }
    }
})


const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer},
})


export const authAction = authSlice.actions;
export const counterAction = counterSlice.actions;

export default store;