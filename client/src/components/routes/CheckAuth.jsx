import {Outlet, useLoaderData} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {setAuth} from "../../state/slices/authenticated";
import {getLocaluser} from "../../methods/loaders";

export const loader = () => {
    return getLocaluser()
}

const CheckAuth = () => {
    const user = useLoaderData()
    const dispatch = useDispatch()

    if(user?.accessToken) {
        dispatch(setAuth(true))
    }
    return <Outlet />
}

export default CheckAuth