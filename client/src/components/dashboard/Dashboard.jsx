import {useDispatch, useSelector} from "react-redux";
import {Outlet, useLoaderData} from "react-router-dom";
import React from "react";
import {Col, Container, Row, Spinner} from "react-bootstrap";
import Header from "../helpers/Header";
import Message from "../helpers/Message";
import NavPanel from "../helpers/NavPanel";
import Menu from "./Collection/Menu";
import Create from "./Collection/Create";
import {setConfirm, setCreate, setEdit,} from "../../state/slices/modals";
import Edit from "./Collection/Edit";
import ConfirmAction from "../helpers/ConfirmAction";

const Dashboard = () => {
    const user = useLoaderData()
    const {modals, editing} = useSelector((state) => state)
    const dispatch = useDispatch()
    return (
        <>
            <Create show={modals.create} onHide={() => dispatch(setCreate(false))}/>
            <Edit show={modals.edit}
                  onHide={() => dispatch(setEdit(false))}
                  data={editing}
            />
            <ConfirmAction show={modals.confirm.state} name={modals.confirm.data} onHide={() => dispatch(setConfirm({state: false, data: null}))} />
            <NavPanel />
            <Header user={user}/>
            <Container >
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