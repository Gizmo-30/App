import {useDispatch, useSelector} from "react-redux";
import {setSuccess} from "../../state/slices/status";
import {NavLink, useLocation} from "react-router-dom";
import Admins from "../roles/Admins";
import Users from "../roles/Users";
import React, {useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";
import Header from "../Header";
import Loading from "../Loading";
import Message from "./Message";

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
        return <Loading />
    }
    return (
        <section className="my-3">
            {user.role === 'admin'? <Admins/>: <Users user={user}/>}
            <Message />
        </section>
    )
}

export default Dashboard