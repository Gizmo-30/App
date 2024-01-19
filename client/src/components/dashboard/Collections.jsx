import React, {useState} from "react";
import { MdAdd } from "react-icons/md";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
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
      <section>

          <CreateCollections
              show={modalShow}
              onHide={() => setModalShow(false)}
          />

          <Row>
              <Col>
                <h1>Collections</h1>
              </Col>
              <Col className="d-flex justify-content-end align-items-center">
                  <Button variant="primary" className="w-25" onClick={() => setModalShow(true)}>
                      <MdAdd />
                  </Button>
              </Col>

          </Row>


          <Row className="my-3">
              {data.map((e, i) => (
                  <Col key={i}>
                      <Card>
                          <Card.Body>
                              <Card.Title>{e.name}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">{e.type}</Card.Subtitle>
                              <Card.Text>{e.description}</Card.Text>
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