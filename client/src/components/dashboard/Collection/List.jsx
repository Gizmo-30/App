import {Button, Card, Col, Dropdown, Row} from "react-bootstrap";
import {MdAdd} from "react-icons/md";
import ServerError from "../ServerError";
import {BsThreeDotsVertical} from "react-icons/bs";
import React, {useEffect, useState} from "react";
import Empty from "../Empty";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Route, Routes, useLoaderData, useLocation, useParams} from "react-router-dom";
import { useGetCollTypeQuery} from "../../../state/slices/api";
import Loading from "../Loading";
import {setConfirm, setDelete, setEdit} from "../../../state/slices/modals";
import axios from "axios";
import {setMessage} from "../../../state/slices/message";
import {setEditData} from "../../../state/slices/edit";

const List = () => {
    const {auth, editing} = useSelector((state) => state)
    const dispatch = useDispatch()
    const [empty, setEmpty] = useState(false)
    const user = useLoaderData()
    const {type} = useParams()

    const username = user.username || ""
    const sort = type === '' ? 'all': type
    const { data, error, isLoading } = useGetCollTypeQuery({type, username,});

    if(isLoading) {
        return <Loading />
    }

    async function handleEdit(e) {
        const name = e.target.parentElement.getAttribute('id')
        dispatch(setEdit(true))
        try {
            const response = await axios.get(`/api/coll/get?name=${name}`)
            dispatch(setEditData(response.data))
        } catch (e) {
            console.error("Error getting collection")
            dispatch(setMessage("Internal server error"))
        }
    }
    async function handleDelete(e) {
        const name = e.target.parentElement.getAttribute('id')
        dispatch(setConfirm({state: true, data: name}))
    }

    return (
        <div>
            <Row >
                {error && <ServerError/>}
                {!data.length && <Empty/>}
                {data.map((elem, i) => (
                    <Col key={i} xs={12} md={4} lg={4} className="my-2">
                        <Card  className="d-flex w-100 h-100 shadow-sm" >
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Card.Title>{elem.name}</Card.Title>
                                    </Col>
                                    {auth
                                        && <Col className="d-flex justify-content-end position-relative">
                                                <Dropdown align="end" >
                                                    <Dropdown.Toggle variant="light" id="dropdown-basic" className="custom-dropdown-toggle bg-transparent border-0">
                                                        <BsThreeDotsVertical  />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu id={elem.name}>
                                                        <Dropdown.Item onClick={(e) => handleEdit(e)}>edit</Dropdown.Item>
                                                        <Dropdown.Item onClick={(e) => handleDelete(e)}>delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Col>
                                    }
                                </Row>
                                <Card.Subtitle className="mb-2 text-muted">{elem.type}</Card.Subtitle>
                                <Card.Text>{elem.description}</Card.Text>
                                <Row>
                                    <Col>
                                        <NavLink to="/items">See items</NavLink>
                                    </Col>
                                    {
                                        !auth &&
                                            <Col className="d-flex justify-content-end column-gap-2 text-capitalize">
                                                by <strong> {elem.User.username}</strong>
                                            </Col>
                                    }

                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )

}

export default List