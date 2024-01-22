import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Main = () => {
    return (
        <div className="v-100 d-flex flex-grow-1 justify-content-center align-items-center header-bg">
            <Container className="d-flex flex-column align-items-center z-1">
                <Row className="d-flex flex-column justify-content-center align-items-center row-gap-2">
                    <h1 className="text-white">Welcome to ColAp</h1>
                    <div className="d-flex column-gap-3">
                        <NavLink to="/dashboard" className="text-decoration-none btn btn-primary w-100">Explore</NavLink>
                        <NavLink to="/login" className="text-decoration-none btn btn-primary w-100">Log in</NavLink>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Main