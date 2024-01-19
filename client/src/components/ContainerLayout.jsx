import {Outlet} from "react-router-dom";
import React from "react";
import {Container} from "react-bootstrap";

const ContainerLayout = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    )
}

export default ContainerLayout