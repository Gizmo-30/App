import {createSlice} from "@reduxjs/toolkit";

const initialState = {status: "", message: ""}
export const statusSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        errors: (state, action) => {
            state.status = "error"
            state.message = action.payload
        },
        success: (state, action) => {
            state.status = "success"
            state.message = action.payload
        },
    }
})

export const {errors,success} = statusSlice.actions
export default statusSlice.reducer