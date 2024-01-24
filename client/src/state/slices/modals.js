import {createSlice} from "@reduxjs/toolkit";

const initialState = false
export const modals = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        setModalShow: (state, action) => {
            return action.payload
        },
    }
})

export const {setModalShow} = modals.actions
export default modals.reducer