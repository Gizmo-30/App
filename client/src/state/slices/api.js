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
        getCollType: builder.query({
            query: ({type, username}) => ({
                url: `/api/coll/get?type=${type}&username=${username}`,
                method: 'Get',
            }),
            refetchOnMountOrArgChange: true,
        }),
        getAllUsers: builder.query({
            query: () => '/api/auth/users',
            refetchOnMountOrArgChange: true,
        })
    })
})
export const { useGetCollTypeQuery, useGetAllUsersQuery} = api;