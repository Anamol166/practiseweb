import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterslice';

export const Data = configureStore({
    reducer:{
        counter:counterReducer
    }
})

export default Data