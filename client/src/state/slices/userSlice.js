import {createSlice} from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
const initialState = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
}
export const userSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
    }
})


export const {setUsername, setPassword, setConfirmPassword, setEmail} = userSlice.actions
export default userSlice.reducer
