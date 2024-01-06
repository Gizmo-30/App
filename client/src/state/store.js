import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import statusSlice from "./slices/statusSlice";
import userSlice from "./slices/userSlice";
import {api} from "./slices/fetchUsers";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        status: statusSlice,
        userInfo: userSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})
