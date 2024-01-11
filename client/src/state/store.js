import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./slices/counter";
import statusSlice from "./slices/status";
import userSlice from "./slices/user";
import {api} from "./slices/api";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        status: statusSlice,
        userInfo: userSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false}).concat(api.middleware),

})
setupListeners(store.dispatch);

