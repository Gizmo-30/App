import {createSlice} from "@reduxjs/toolkit";

const initialState = {}
export const editData = createSlice({
    name: 'editing',
    initialState,
    reducers: {
        setEditData: (state, action) => {
            return action.payload
        },
    }
})

export const {setEditData} = editData.actions
export default editData.reducer