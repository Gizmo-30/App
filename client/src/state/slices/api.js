import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import authHeader from "../../methods/authHeader";


const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://collections-server.vercel.app';

export const api = createApi({
    tagTypes: ['users'],
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
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
                url: '/api/coll/get/all/user',
                method: 'Get',
                headers: authHeader(),
            })
        }),
        getCollectionsAll: builder.query({
            query: () => ({
                url: '/api/coll/get/all',
                method: 'Get',
            })
        }),
        getCollType: builder.query({
            query: ({type, auth, username}) => ({
                url: `/api/coll/get?type=${type}&auth=${auth}&username=${username}`,
                method: 'Get',
            }),
            refetchOnMountOrArgChange: true,
        })
    })
})
export const { useGetUsersQuery, useSendUsersQuery, useGetUserQuery, useGetCollectionsQuery, useGetCollectionsAllQuery, useGetCollTypeQuery} = api;