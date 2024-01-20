import React, {useRef, useState} from "react";
import {MdAdd, MdDelete, MdEdit} from "react-icons/md";
import {Button, ButtonGroup, Card, Col, Container, Row, Form, Overlay, Dropdown} from "react-bootstrap";
import CreateCollections from "./CreateCollections";
import {useGetCollectionsQuery} from "../../state/slices/api";
import Loading from "../Loading";
import {NavLink} from "react-router-dom";
import {BsThreeDotsVertical} from "react-icons/bs";
import "../../App.css";
import {current} from "@reduxjs/toolkit";
import {handleDelete} from "../handlers/handlers";
const Collections = ({user}) => {
    const [modalShow, setModalShow] = useState(false);

    const {data, error, isLoading} = useGetCollectionsQuery({}, {pollingInterval: 5000,})

    if (error) {
        return <p>Error: {error.message}</p>;
    }
    if (isLoading) {
        return <Loading />
    }

  return (
      <section>

          <CreateCollections
              show={modalShow}
              onHide={() => setModalShow(false)}
          />

          <Row className="d-flex align-items-center">
              <Col>
                <h1>Collections</h1>
              </Col>
              <Col className="d-flex justify-content-end column-gap-2 ">
                  <p>signed in as <strong className="text-capitalize">{user.username}</strong></p>
                  <NavLink to="/" onClick={() => localStorage.removeItem("user")}>sign out</NavLink>
              </Col>
          </Row>
          <hr/>
          <Row className="d-flex align-items-center">
              <Col className="d-flex justify-content-end">
                  <ButtonGroup aria-label="Basic example">
                      <Button variant="outline-primary" onClick={() => setModalShow(true)}><MdAdd /></Button>
                      <Button variant="outline-warning"><MdEdit /></Button>
                      <Button variant="outline-danger"><MdDelete /></Button>
                  </ButtonGroup>
              </Col>
          </Row>
          <Row >
              {data.map((elem, i) => (
                  <Col key={i} xs={12} md={4} lg={4} className="my-2">
                      <Card>
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
                                              <Dropdown.Item href="#/action-1">edit</Dropdown.Item>
                                              <Dropdown.Item onClick={(e) => handleDelete(e)}>delete</Dropdown.Item>
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
      </section>
  )
}

export default Collections