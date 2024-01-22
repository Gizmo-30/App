import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import authHeader from "../../methods/authHeader";

export const api = createApi({
    tagTypes: ['users'],
    reducerPath: 'api',
    // baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    baseQuery: fetchBaseQuery({baseUrl: 'https://collections-server.vercel.app'}),
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
                url: '/api/coll/get/all',
                method: 'Get',
                headers: authHeader(),
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
export const { useGetUsersQuery, useSendUsersQuery, useGetUserQuery, useGetCollectionsQuery} = api;