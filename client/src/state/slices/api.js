import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    tagTypes: ['users'],
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    refetchOnFocus: true,
    refetchOnReconnect: true,
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => ({
                url: '/users/',
                method: 'Get',
            })
        }),
        getUser: builder.query({
            query: () => ({
                url: '/login',
                method: 'Get',
            })
        }),
        getCollections: builder.query({
            query: () => ({
                url: '/coll/get',
                method: 'Get',
            })
        }),
        sendUsers: builder.mutation({
            query: (body) => ({
                url: '/login/',
                method: 'POST',
                body,
            }),
        })
    })
})
export const { useGetUsersQuery, useSendUsersQuery, useGetUserQuery} = api;