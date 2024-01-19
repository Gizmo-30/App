import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";

const CheckAuth = () => {
    const userInfo = useSelector((state) => state.userInfo)
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
        return(
            <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="loading"/>
            </div>
        )
    }
    return (
        user?.accessToken
            ? <Outlet />
            : <Navigate to="/login" state={{from: location}} replace/>
    )
}

export default CheckAuth