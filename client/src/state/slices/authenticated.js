import {createSlice} from "@reduxjs/toolkit";

const initialState = false
export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            return action.payload
        },
    }
})

export const {setAuth} = auth.actions
export default auth.reducer