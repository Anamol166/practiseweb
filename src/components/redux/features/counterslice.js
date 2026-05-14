import { createSlice } from "@reduxjs/toolkit";

export const counterslice = createSlice({
    name: 'Counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value++
            console.log(state.value);

        },
        decremenet: (state) => {
            state.value--
        },
        byvalue : (state,actions) =>{
            state.value += actions.payload
        }
    }
})

export const { increment, decremenet,byvalue } = counterslice.actions
export default counterslice.reducer