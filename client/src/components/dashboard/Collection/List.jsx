import {Button, Card, Col, Dropdown, Row} from "react-bootstrap";
import {MdAdd} from "react-icons/md";
import ServerError from "../ServerError";
import {BsThreeDotsVertical} from "react-icons/bs";
import React from "react";

const List = (props) => {
    return (
        <div>
            <Row className="justify-content-end mx-2">
                <Button variant="outline-primary" className="w-25" onClick={() => props.setModalShow(true)}>Add new collection<MdAdd /></Button>
            </Row>
            <Row >
                {props.data.map((elem, i) => (
                    <Col key={i} xs={12} md={4} lg={4} className="my-2">
                        <Card  className="d-flex w-100 h-100">
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Card.Title>{elem.name}</Card.Title>
                                    </Col>
                                    <Col className="d-flex justify-content-end position-relative">
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
                                </Row>
                                <Card.Subtitle className="mb-2 text-muted">{elem.type}</Card.Subtitle>
                                <Card.Text>{elem.description}</Card.Text>
                                <Card.Link href="#">See items</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default List