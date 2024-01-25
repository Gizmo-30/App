import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {ListGroup, Tab} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Button from "react-bootstrap/Button";
import {setCreate} from "../../../state/slices/modals";

const Menu = () => {
    const types = useSelector((state) => state.types)
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onNavigate = (e) => {
        const url = e === '' ? '/' : `/?type=${e}`
        navigate(url, { replace: true })
    }
    return (
        <Tab.Container >
            <Button variant="primary" className="w-100 my-2" onClick={() => dispatch(setCreate(true))}>Add new collection</Button>
            <ListGroup className="shadow-sm w-100" defaultActiveKey="all">
                {
                    types.map((e,i) => (
                        <ListGroup.Item
                            key={i}
                            action
                            active={`?type=${e}` === location.search || e === '' && location.search === ''}
                            onClick={() => onNavigate(e)}
                        >
                            {e === ''? 'all': e }
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Tab.Container>
    )
}

export default Menu