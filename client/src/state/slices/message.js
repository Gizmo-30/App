import {createSlice} from "@reduxjs/toolkit";

const initialState = {message: ""}
export const message = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload
        },
    }
})

export const {setMessage} = message.actions
export default message.reducer