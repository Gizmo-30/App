import {ButtonGroup, Form, Table} from "react-bootstrap";
import {useGetAllUsersQuery} from "../../state/slices/api";
import Loading from "../helpers/Loading";
import ServerError from "../helpers/ServerError";
import Button from "react-bootstrap/Button";
import {TbLockOpen} from "react-icons/tb";
import {MdDelete} from "react-icons/md";
import {useLoaderData} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {setConfirm} from "../../state/slices/modals";
import ConfirmAction from "../helpers/ConfirmAction";
import {useDispatch, useSelector} from "react-redux";
import {setMessage} from "../../state/slices/message";
import {GrUserAdmin} from "react-icons/gr";
import {RiAdminLine} from "react-icons/ri";
import Message from "../helpers/Message";

const Users = () => {
    const modals = useSelector((state) => state.modals)
    const dispatch = useDispatch()
    const user = useLoaderData()
    const { data, error, isLoading } = useGetAllUsersQuery({}, {pollingInterval: 5000,})

    const [checkedAll, setCheckedAll] = useState(false)
    const [singleCheck,setSingleCheck] = useState([])


    useEffect(() => {
        if (!isLoading && !error && data) {
            setSingleCheck(data.map(() => false));
        }
    }, [data, isLoading, error]);

    const handleAll = () => {
        setCheckedAll((prev) => !prev)
        setSingleCheck((prev) => prev.map(() => !checkedAll));
    }


    const handleSingle = (i) => {
        setSingleCheck((prev) => {
            const newChecks = [...prev];
            newChecks[i] = !newChecks[i];
            return newChecks;
        })
    };

    const handleChange = (e) => {
        if(singleCheck.every(e => e === false )) {
            return dispatch(setMessage('User not selected'))
        }

        let checked = []
        singleCheck.forEach((e,i) => {
            if(e === true){
                checked.push(data[i].username)
            }
        })
        dispatch(setConfirm({state: true, data: {checked, action: e}}))
    }



    if(isLoading) return <Loading />
    if(error) return <ServerError />
    return (
        <div className="w-100 position-relative">
            <ConfirmAction show={modals.confirm.state} name={modals.confirm.data} onHide={() => dispatch(setConfirm({state: false, data: null}))} />


            <ButtonGroup className="mb-4 shadow-lg"
                         style={{
                             position: 'sticky',
                             top: '20px',
                             zIndex: 1000,
                         }}

            >
                <Button variant="danger" className="position-relative"
                    onClick={(e) => handleChange(e.target.id)}  id="block"
                >
                    Block user
                </Button>
                <Button className="position-relative" variant="success">
                    <Button className="position-absolute top-0 start-0 w-100 h-100 opacity-0" id="active"
                        onClick={(e) => handleChange(e.target.id)}
                    ></Button>
                    <TbLockOpen />
                </Button>
                <Button className="position-relative" variant="warning" >
                    <Button className="position-absolute top-0 start-0 w-100 h-100 opacity-0" id="delete"
                        onClick={(e) => handleChange(e.target.id)}
                    ></Button>
                    <MdDelete />
                </Button>
                <Button className="position-relative" variant="info" >
                    <Button className="position-absolute top-0 start-0 w-100 h-100 opacity-0" id="admin"
                        onClick={(e) => handleChange(e.target.id)}
                    ></Button>
                    make admin
                    <GrUserAdmin className="mx-3"/>
                </Button>
                <Button className="position-relative" variant="info" >
                    <Button className="position-absolute top-0 start-0 w-100 h-100 opacity-0" id="user"
                        onClick={(e) => handleChange(e.target.id)}
                    ></Button>
                    remove admin
                    <RiAdminLine  className="mx-3"/>
                </Button>
            </ButtonGroup>
            <div className="w-100 overflow-auto">
                <Table striped bordered hover >
                    <thead>
                    <tr>
                        <th><Form.Check type="checkbox" id="checks" checked={checkedAll} onChange={handleAll}/></th>
                        <th>#</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>status</th>
                        <th>registered</th>
                        <th>updated</th>
                        <th>Password</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((e,i) => {
                        return(
                            <tr key={i} className={e.username === user.username && "active"}>
                                <td><Form.Check id={i} type="checkbox" checked={singleCheck[i]} onChange={() => handleSingle(i)}/></td>
                                <td>{i+1}</td>
                                <td>{e.username}</td>
                                <td>{e.role}</td>
                                <td>{e.email}</td>
                                <td>{e.status}</td>
                                <td>{e.createdAt}</td>
                                <td>{e.updatedAt}</td>
                                <td>{e.password}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
            <Message class={`position-absolute bottom-0 end-0 mx-3`}/>
        </div>
    )
}

export default Users