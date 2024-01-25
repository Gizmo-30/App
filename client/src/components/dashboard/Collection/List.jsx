import {Card, Col, Dropdown, Row} from "react-bootstrap";
import { CgDetailsMore } from "react-icons/cg";
import ServerError from "../../helpers/ServerError";
import {BsThreeDotsVertical} from "react-icons/bs";
import React, {useState} from "react";
import Empty from "../../helpers/Empty";
import {useDispatch, useSelector} from "react-redux";
import {Link, NavLink, useLoaderData, useLocation, useParams} from "react-router-dom";
import {useGetCollTypeQuery} from "../../../state/slices/api";
import Loading from "../../helpers/Loading";
import {setConfirm, setEdit} from "../../../state/slices/modals";
import axios from "axios";
import {setMessage} from "../../../state/slices/message";
import {setEditData} from "../../../state/slices/edit";

const List = () => {
    const {auth, editing} = useSelector((state) => state)
    const location = useLocation().search.slice(6)
    const dispatch = useDispatch()
    const [empty, setEmpty] = useState(false)
    const user = useLoaderData()
    const type = location === '' ? 'all': location


    const username = user.username || ""
    const sort = type === '' ? 'all': type
    const { data, error, isLoading } = useGetCollTypeQuery({type, username,}, {pollingInterval: 5000,});

    if(isLoading) {
        return <Loading />
    }

    async function handleEdit(e) {
        const name = e.target.parentElement.getAttribute('id')
        dispatch(setEdit(true))
        try {
            const response = await axios.get(`/api/coll/get?username=${name}`)
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
            <Row className="d-felx flex-column row-gap-1">
                {/*{data && !data.length && <Empty/>}*/}
                {error
                    ? <ServerError/>
                    : !data.length
                    ? <Empty/>
                        : data.map((elem, i) => (
                                <Card>
                                    <Card.Body>
                                        <Row >
                                            <Col className="d-flex align-items-center column-gap-3">
                                                <Card.Title className="m-0">{elem.name}</Card.Title>
                                                <Card.Subtitle className="text-muted">{elem.type}</Card.Subtitle>
                                            </Col>
                                            <Col className="d-flex justify-content-end align-items-center">
                                                <Link to={`/details/${elem.name}`}><CgDetailsMore /></Link>
                                                {auth
                                                    && <Dropdown align="end" >
                                                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="custom-dropdown-toggle bg-transparent border-0">
                                                            <BsThreeDotsVertical  />
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={(e) => handleEdit(e)}>edit</Dropdown.Item>
                                                            <Dropdown.Item onClick={(e) => handleDelete(e)}>delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                }
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            ))}

            </Row>
    )

}

export default List


// {data.map((elem, i) => (
//     <Col key={i} xs={12} md={4} lg={4} className="my-2">
//         <Card  className="d-flex w-100 h-100 shadow-sm" >
//             <Card.Body>
//                 <Row>
//                     <Col>
//                         <Card.Title>{elem.name}</Card.Title>
//                     </Col>
//                     {auth
//                         && <Col className="d-flex justify-content-end position-relative">
//                             <Dropdown align="end" >
//                                 <Dropdown.Toggle variant="light" id="dropdown-basic" className="custom-dropdown-toggle bg-transparent border-0">
//                                     <BsThreeDotsVertical  />
//                                 </Dropdown.Toggle>
//
//                                 <Dropdown.Menu id={elem.name}>
//                                     <Dropdown.Item onClick={(e) => handleEdit(e)}>edit</Dropdown.Item>
//                                     <Dropdown.Item onClick={(e) => handleDelete(e)}>delete</Dropdown.Item>
//                                 </Dropdown.Menu>
//                             </Dropdown>
//                         </Col>
//                     }
//                 </Row>
//                 <Card.Subtitle className="mb-2 text-muted">{elem.type}</Card.Subtitle>
//                 <Card.Text>{elem.description}</Card.Text>
//                 <Row>
//                     <Col>
//                         <NavLink to="/item">See items</NavLink>
//                     </Col>
//                     {
//                         !auth &&
//                         <Col className="d-flex justify-content-end column-gap-2 text-capitalize">
//                             by <strong> {elem.User.username}</strong>
//                         </Col>
//                     }
//
//                 </Row>
//             </Card.Body>
//         </Card>
//     </Col>
// ))}