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
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setError, setSuccess} from "../../state/slices/status";
import {setMessage} from "../../state/slices/message";
import EditCollection from "./EditCollection";
import ConfirmAction from "./ConfirmAction";
const Collections = ({user}) => {
    const status = useSelector((state) => state.status)
    const dispatch = useDispatch()

    const [modalShow, setModalShow] = useState(false);
    const [modalEditShow, setEditModalShow] = useState(false);
    const [modalConfirmShow, setModalConfirmShow] = useState({status: false, data: null});

    const [collection, setCollection] = useState({});
    const {data, error, isLoading} = useGetCollectionsQuery({}, {pollingInterval: 5000,})

    async function handleDelete(e) {
        const name = e.target.parentElement.getAttribute('id')
        setModalConfirmShow({status: true, data: name})
    }
    async function handleEdit(e) {
        const name = e.target.parentElement.getAttribute('id')
        setEditModalShow(true)
        try {
            const response = await axios.post('/api/coll/get/one', {name})
            setCollection(response.data)
        } catch (e) {
            console.error("Error getting collection")
        }
    }

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
          <EditCollection
              show={modalEditShow}
              onHide={() => setEditModalShow(false)}
              name={collection.name}
              description={collection.description}
              type={collection.type}
          />

          <ConfirmAction
              show={modalConfirmShow.status}
              onHide={() => setModalConfirmShow({status: false, data: null})}
              name={modalConfirmShow.data}
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
          <Row >
              <Col xs={12} md={4} lg={4} className="my-2">
                  <Card className="d-flex w-100 h-100 ">
                      <Card.Body className="d-flex flex-column align-items-center justify-content-center row-gap-2">
                          <Row>
                              <Col>
                                  <Card.Title> Add new Collection</Card.Title>
                              </Col>
                          </Row>
                          <Button variant="outline-primary" className="w-50" onClick={() => setModalShow(true)}><MdAdd /></Button>
                      </Card.Body>
                  </Card>
              </Col>
              {data.map((elem, i) => (
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
                                              <Dropdown.Item onClick={(e) => handleEdit(e)}>edit</Dropdown.Item>
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