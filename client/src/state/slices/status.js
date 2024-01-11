import {createSlice} from "@reduxjs/toolkit";

const initialState = {error: "", success: "", reset: false}
export const status = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload
        },
        setSuccess: (state, action) => {
            state.success = action.payload
        },
        setReset: (state) => {
            state.reset = !state.reset
        },
    }
})

export const {setError,setSuccess, setReset} = status.actions
export default status.reducer