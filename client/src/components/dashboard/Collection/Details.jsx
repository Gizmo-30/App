import {useLoaderData, useLocation, useParams, useSearchParams} from "react-router-dom";
import {Card, ListGroup} from "react-bootstrap";
import {setEdit} from "../../../state/slices/modals";
import axios from "axios";
import {setEditData} from "../../../state/slices/edit";
import {setMessage} from "../../../state/slices/message";
import {useDispatch, useSelector} from "react-redux";
import Button from "react-bootstrap/Button";

const Details = () => {
    const data = useLoaderData()
    const auth = useSelector((state) => state.auth)
    console.log(auth)
    const dispatch = useDispatch()

    return (
        <Card>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    <span className="fst-italic">name: </span>
                    <Card.Title className="text-capitalize m-0">{data.name}</Card.Title>
                </ListGroup.Item>
                <ListGroup.Item>
                    <span className="fst-italic">description: </span>
                    <Card.Text>{data.description}</Card.Text>
                </ListGroup.Item>
                <ListGroup.Item>
                    <span className="fst-italic">type: </span>
                    <Card.Text>{data.type}</Card.Text>
                </ListGroup.Item>
                {
                    auth ||
                    <ListGroup.Item>
                        <span className="fst-italic">creator: </span>
                        <Card.Text>{data.User.username}</Card.Text>
                    </ListGroup.Item>
                }
                <ListGroup.Item>
                    <span className="fst-italic">createdAt: </span>
                    {data.createdAt}
                </ListGroup.Item>
                <ListGroup.Item>
                    <span className="fst-italic">updatedAt: </span>
                    {data.updatedAt}
                </ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex column-gap-3">
                <Button variant="outline-primary">see items</Button>
            </Card.Body>
        </Card>
    )
}

export default Details