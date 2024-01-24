import {configureStore} from "@reduxjs/toolkit";
import statusSlice from "./slices/status";
import userSlice from "./slices/user";
import {api} from "./slices/api";
import {setupListeners} from "@reduxjs/toolkit/query";
import message from "./slices/message";
import auth from "./slices/authenticated";
import types from "./slices/types";
import modals from "./slices/modals";
import editData from "./slices/edit";

export const store = configureStore({
    reducer: {
        status: statusSlice,
        message: message,
        userInfo: userSlice,
        auth: auth,
        types: types,
        modals: modals,
        editing: editData,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false}).concat(api.middleware),

})
setupListeners(store.dispatch);

