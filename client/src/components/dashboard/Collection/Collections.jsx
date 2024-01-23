// import React, {useState} from "react";
// import {Col, Row} from "react-bootstrap";
// import Create from "./Create";
// import {useGetCollectionsAllQuery, useGetCollectionsQuery} from "../../../state/slices/api";
// import Loading from "../Loading";
// import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
// import "../../../App.css";
// import axios from "axios";
// import {useDispatch, useSelector} from "react-redux";
// import Edit from "./Edit";
// import ConfirmAction from "./ConfirmAction";
// import ServerError from "../ServerError";
// import List from "./List";
// import {setPassword, setUsername} from "../../../state/slices/user";
// import Menu from "./Menu";
// import Items from "../Item/Items";
// import Main from "../../Main";
//
// const Collections = ({user}) => {
//     const auth = useSelector((state) => state.auth)
//     const dispatch = useDispatch()
//
//     const [modalShow, setModalShow] = useState(false);
//     const [modalEditShow, setEditModalShow] = useState(false);
//     const [modalConfirmShow, setModalConfirmShow] = useState({status: false, data: null});
//
//     const [collection, setCollection] = useState({});
//
//     const fetchData = auth ? useGetCollectionsQuery : useGetCollectionsAllQuery
//
//     const {data, error, isLoading} = fetchData({}, {pollingInterval: 5000,})
//     async function handleDelete(e) {
//         const name = e.target.parentElement.getAttribute('id')
//         setModalConfirmShow({status: true, data: name})
//     }
//     async function handleEdit(e) {
//         const name = e.target.parentElement.getAttribute('id')
//         setEditModalShow(true)
//         try {
//             const response = await axios.post('/api/coll/get/one', {name})
//             setCollection(response.data)
//         } catch (e) {
//             console.error("Error getting collection")
//         }
//     }
//
//
//   return (
//       <section>
//           <Create
//               show={modalShow}
//               onHide={() => setModalShow(false)}
//           />
//           <Edit
//               show={modalEditShow}
//               onHide={() => setEditModalShow(false)}
//               name={collection.name}
//               description={collection.description}
//               type={collection.type}
//           />
//
//           <ConfirmAction
//               show={modalConfirmShow.status}
//               onHide={() => setModalConfirmShow({status: false, data: null})}
//               name={modalConfirmShow.data}
//           />
//
//
//           <Row>
//               <Col>
//                   <Menu />
//               </Col>
//               <Col lg={9}>
//                   {isLoading && <Loading />}
//                   {error && <ServerError />}
//                   {!isLoading && !error && <List data={data} setModalShow={setModalShow} handleEdit={handleEdit} handleDelete={handleDelete}/>}
//               </Col>
//           </Row>
//       </section>
//   )
// }
//
// export default Collections