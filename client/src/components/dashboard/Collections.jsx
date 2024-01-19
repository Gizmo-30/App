import React, {useState} from "react";
import {MdAdd, MdDelete, MdEdit} from "react-icons/md";
import {Button, ButtonGroup, Card, Col, Container, Row} from "react-bootstrap";
import CreateCollections from "./CreateCollections";
import {useGetCollectionsQuery} from "../../state/slices/api";
import Loading from "../Loading";
const Collections = ({user}) => {
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
              <Col>
                  <p>signed in as {user.username}</p>
              </Col>
          </Row>
          <hr/>

          <ButtonGroup aria-label="Basic example">
              <Button variant="outline-primary"><MdAdd /></Button>
              <Button variant="outline-warning"><MdEdit /></Button>
              <Button variant="outline-danger"><MdDelete /></Button>
          </ButtonGroup>

          <Row className="my-3">
              {data.map((e, i) => (
                  <Col key={i} xs={12} md={4} lg={4}>
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