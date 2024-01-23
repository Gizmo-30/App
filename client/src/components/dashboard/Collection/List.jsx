import {Button, Card, Col, Dropdown, Row} from "react-bootstrap";
import {MdAdd} from "react-icons/md";
import ServerError from "../ServerError";
import {BsThreeDotsVertical} from "react-icons/bs";
import React, {useEffect, useState} from "react";
import Empty from "../Empty";
import {useSelector} from "react-redux";

const List = (props) => {
    const auth = useSelector((state) => state.auth)
    const [empty, setEmpty] = useState(false)
    useEffect(() => {
        if (!props.data.length) {
            setEmpty(true)
        } else setEmpty(false)
    }, [props.data]);
    return (
        <div>
            {auth
                &&
                <Row className="justify-content-end my-3">
                    <Button variant="outline-primary" className="w-25" onClick={() => props.setModalShow(true)}>Add new collection<MdAdd /></Button>
                </Row>
            }
            <Row >
                {empty && <Empty/>}
                {props.data.map((elem, i) => (
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
                                                        <Dropdown.Item onClick={(e) => props.handleEdit(e)}>edit</Dropdown.Item>
                                                        <Dropdown.Item onClick={(e) => props.handleDelete(e)}>delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Col>
                                    }
                                </Row>
                                <Card.Subtitle className="mb-2 text-muted">{elem.type}</Card.Subtitle>
                                <Card.Text>{elem.description}</Card.Text>
                                <Row>
                                    <Col>
                                        <Card.Link href="#">See items</Card.Link>
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