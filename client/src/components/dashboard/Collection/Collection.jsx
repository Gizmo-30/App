import {Col, Row} from "react-bootstrap";
import Menu from "./Menu";
import {Outlet} from "react-router-dom";
import React from "react";
import Message from "../../helpers/Message";

const Collection = () => {
    return (
        <Row >
            <Col sm={3}>
                <Menu />
            </Col>
            <Col>
                <Outlet/>
            </Col>
        </Row>
    )
}

export default Collection