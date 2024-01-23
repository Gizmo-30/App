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
                            <Nav.Link href="/dashboard" onClick={(e) => e.preventDefault()}>Collections</Nav.Link>
                            <Nav.Link href="/users" onClick={(e) => e.preventDefault()}>Users</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled={false}>
                                Link
                            </Nav.Link>
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