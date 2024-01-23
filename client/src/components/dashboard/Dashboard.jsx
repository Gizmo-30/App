import {useDispatch, useSelector} from "react-redux";
import {setSuccess} from "../../state/slices/status";
import {NavLink, useLocation} from "react-router-dom";
import Admins from "../roles/Admins";
import Users from "../roles/Users";
import React, {useEffect, useState} from "react";
import {Col, Container, Row, Spinner} from "react-bootstrap";
import Header from "../dashboard/Collection/Header";
import Loading from "./Loading";
import Message from "./Message";
import NavPanel from "../NavPanel";
import Menu from "./Collection/Menu";
import List from "./Collection/List";
import {useGetCollTypeQuery} from "../../state/slices/api";
import ServerError from "./ServerError";

const Dashboard = () => {
    const type = useLocation().search.slice(6)

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const user = JSON.parse(localStorage.getItem("user"))
        setUser(user || {})
        setLoading(false)
    }, []);

    const username = user.username || ""
    const { data, error, isLoading } = useGetCollTypeQuery({type, username,});

    if(loading) {
        return <Loading />
    }

    return (
        <>
            <NavPanel />
            <Header />
            <Container>
                <Row>
                    <Col sm={3}>
                        <Menu />
                    </Col>
                    <Col>
                        {isLoading ? <Loading/>: <List data={data}/>}
                        {error && <ServerError/>}
                    </Col>
                </Row>
            </Container>
            <Message />
        </>
    )
}

export default Dashboard