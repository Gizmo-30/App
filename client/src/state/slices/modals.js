import {createSlice} from "@reduxjs/toolkit";

const initialState = {create: false, edit: false, confirm: {state: false, data: null}}
export const modals = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        setCreate: (state, action) => {
            state.create = action.payload
        },
        setEdit: (state, action) => {
            state.edit = action.payload
        },
        setConfirm: (state, action) => {
            state.confirm =  action.payload
        },
    }
})

export const {setCreate, setEdit, setConfirm} = modals.actions
export default modals.reducer