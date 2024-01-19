import {useDispatch, useSelector} from "react-redux";
import {setSuccess} from "../../state/slices/status";
import {NavLink, useLocation} from "react-router-dom";
import Admins from "../roles/Admins";
import Users from "../roles/Users";
import React, {useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";
import Header from "../Header";

const Dashboard = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        const user = JSON.parse(localStorage.getItem("user"))
        setUser(user || {})
        setLoading(false)
    }, []);

    if(loading) {
        return(
            <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="loading"/>
            </div>
        )
    }
    return (
        <div>
            {user.role === 'admin'? <Admins/>: <Users/>}
        </div>
    )
}

export default Dashboard