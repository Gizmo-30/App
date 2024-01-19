import React, {useState} from "react";
import { MdAdd } from "react-icons/md";
import {Button, Col, Container, Row} from "react-bootstrap";
import CreateCollections from "./CreateCollections";
import {useGetCollectionsQuery} from "../../state/slices/api";
import Loading from "../Loading";
const Collections = () => {
    const [modalShow, setModalShow] = useState(false);
    const {data, error, isLoading} = useGetCollectionsQuery()
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    if (isLoading) {
        return <Loading />
    }

  return (
      <div className="py-3">
          <h1>Collections</h1>
          <Container fluid>
              {data.map((e, i) => (
                  <Row key={i} className="mb-3">
                      <Col xs={12} md={4} lg={4}>
                          <div>
                              <p>{e.name}</p>
                              <p>{e.description}</p>
                              <p>{e.type}</p>
                          </div>
                      </Col>
                  </Row>
              ))}
          </Container>

          <CreateCollections
              show={modalShow}
              onHide={() => setModalShow(false)}
          />
          <Button variant="primary" onClick={() => setModalShow(true)}>
              <MdAdd />
          </Button>
      </div>
  )
}

export default Collections