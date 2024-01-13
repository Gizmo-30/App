import {createSlice} from "@reduxjs/toolkit";

const initialState = {name: "", message: ""}
export const status = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.name = "error"
            state.message = action.payload
        },
        setSuccess: (state, action) => {
            state.name = "success"
            state.message = action.payload
        },
    }
})

export const {setError,setSuccess} = status.actions
export default status.reducer