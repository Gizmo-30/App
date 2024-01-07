import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001"}),
    endpoints: (builder) => ({
        dbData: builder.query({
            query: () => "users",
        }),
        sendLoginData: builder.query({
            query: () => "login"
        })
    })
})
export const { useDbDataQuery } = api;