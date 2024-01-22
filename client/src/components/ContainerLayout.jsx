import {Outlet} from "react-router-dom";
import React from "react";
import {Container} from "react-bootstrap";

const ContainerLayout = () => {
    return (
        <Container className="d-flex flex-column flex-grow-1">
            <Outlet />
        </Container>
    )
}

export default ContainerLayout