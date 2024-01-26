import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import {NavLink, useLoaderData, useLocation, useNavigate} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAuth} from "../../state/slices/authenticated";
import {setConfirmPassword, setEmail, setPassword, setUsername} from "../../state/slices/user";
import {setConfirm} from "../../state/slices/modals";

const Header = ({user}) => {
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    async function onSignOut() {
        await localStorage.removeItem("user")
        dispatch(setAuth(false))
        dispatch(setUsername(""))
        dispatch(setPassword(""))
        dispatch(setEmail(""))
        dispatch(setConfirmPassword(""))
        navigate('/login')

    }

    return (
        <Container>
            <Row className="d-flex align-items-center my-4">
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item active={'/' === location.pathname}>
                            <NavLink to="/" className="link">Collections</NavLink>
                        </Breadcrumb.Item>
                        {user.role === 'admin' &&
                            <Breadcrumb.Item active={'/users' === location.pathname}>
                                <NavLink to="/users" className="link">Users</NavLink>
                            </Breadcrumb.Item>
                        }
                        <Breadcrumb.Item active={'/items' === location.pathname}>
                            <NavLink to="/items" className="link">Items</NavLink>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <Col className="d-flex justify-content-end column-gap-2 ">
                    <p>
                        {auth ? 'signed in as '  : 'not signed in'}
                        <strong className="text-capitalize">{user.username}</strong>
                    </p>
                    {auth
                        ? <NavLink to="/" onClick={onSignOut}>sign out</NavLink>
                        : <NavLink to="/login" >sign in</NavLink>
                    }
                </Col>
                <hr className="m-0"/>
            </Row>
        </Container>
    )
}

export default Header