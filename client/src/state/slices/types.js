import {createSlice} from "@reduxjs/toolkit";

const initialState = ['', 'book', 'movie']
export const types = createSlice({
    name: 'types',
    initialState,
    reducers: {
        setType: (state, action) => {
            return [...state, action.payload]
        },
    }
})

export const {setType} = types.actions
export default types.reducer