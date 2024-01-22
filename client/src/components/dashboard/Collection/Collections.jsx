import React, {useRef, useState} from "react";
import {MdAdd, MdDelete, MdEdit} from "react-icons/md";
import {Button, ButtonGroup, Card, Col, Container, Row, Form, Overlay, Dropdown, Alert} from "react-bootstrap";
import Create from "./Create";
import {useGetCollectionsQuery} from "../../../state/slices/api";
import Loading from "../Loading";
import {NavLink} from "react-router-dom";
import {BsThreeDotsVertical} from "react-icons/bs";
import "../../../App.css";
import {current} from "@reduxjs/toolkit";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setError, setSuccess} from "../../../state/slices/status";
import {setMessage} from "../../../state/slices/message";
import Edit from "./Edit";
import ConfirmAction from "./ConfirmAction";
import ServerError from "../ServerError";
import List from "./List";
const Collections = ({user}) => {
    const status = useSelector((state) => state.status)
    const dispatch = useDispatch()

    const [modalShow, setModalShow] = useState(false);
    const [modalEditShow, setEditModalShow] = useState(false);
    const [modalConfirmShow, setModalConfirmShow] = useState({status: false, data: null});
    const [serverError, setServerError] = useState(false);

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

    // if (error) {
    //     return <ServerError />
    // }
    // if (isLoading) {
    //     return <Loading />
    // }

  return (
      <section>
          <Create
              show={modalShow}
              onHide={() => setModalShow(false)}
          />
          <Edit
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
          {isLoading && <Loading />}
          {error && <ServerError />}
          {!isLoading && !error && <List data={data} setModalShow={setModalShow} handleEdit={handleEdit} handleDelete={handleDelete}/>}
      </section>
  )
}

export default Collections