import {useDispatch, useSelector} from "react-redux";
import {setSuccess} from "../../state/slices/status";
import {NavLink, Outlet, useLocation, useNavigate} from "react-router-dom";
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
import Create from "./Collection/Create";
import Button from "react-bootstrap/Button";
import {setModalShow} from "../../state/slices/modals";

const Dashboard = () => {
    const modal = useSelector((state) => state.modals)
    const dispatch = useDispatch()
    console.log(modal)
    return (
        <>
            <Create show={modal} onHide={() => dispatch(setModalShow(false))}/>
            <NavPanel />
            <Header />
            <Container>
                <Row>
                    <Col sm={3}>
                        <Menu />
                    </Col>
                    <Col>
                        <Outlet/>
                    </Col>
                </Row>
            </Container>
            <Message />
        </>
    )
}

export default Dashboard