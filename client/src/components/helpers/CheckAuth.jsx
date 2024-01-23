import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";
import Loading from "../dashboard/Loading";
import Dashboard from "../dashboard/Dashboard";
import {setAuth} from "../../state/slices/authenticated";

const CheckAuth = () => {
    const auth = useSelector((state) => state.auth)
    console.log(auth)
    const dispatch = useDispatch()
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        const user = JSON.parse(localStorage.getItem("user"))
        setUser(user || {})
        setLoading(false)
    }, []);


    const location = useLocation()
    if(loading) {
        return <Loading />
    }

    if(user?.accessToken) {
        dispatch(setAuth(true))
    }
    return <Outlet />
}

export default CheckAuth