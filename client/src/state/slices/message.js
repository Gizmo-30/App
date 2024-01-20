import {createSlice} from "@reduxjs/toolkit";

const initialState = {message: ""}
export const status = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload
        },
    }
})

export const {setMessage} = status.actions
export default status.reducer