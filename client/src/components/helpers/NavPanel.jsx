import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {NavLink} from "react-router-dom";

const NavPanel = () => {
    return (
        <headerd className="Header">
            <Navbar expand="lg" data-bs-theme="secondary" className="bg-body-tertiary">
                <Container>
                    {/*<Navbar.Brand href="/" onClick={(e) => e.preventDefault()}>ColAp</Navbar.Brand>*/}
                    <NavLink to="/" className="navbar-brand">ColAp</NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </headerd>
    )
}

export default NavPanel