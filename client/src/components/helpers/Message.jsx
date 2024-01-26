import {Alert} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {setError} from "../../state/slices/status";
import {setMessage} from "../../state/slices/message";

const Message = (props) => {
    const message = useSelector((state) => state.message)
    const dispatch = useDispatch()
    setTimeout(() => dispatch(setMessage("")), 5000)

    if (message.message) {
        return <Alert variant="primary" className={props.class}>{message.message}</Alert>
    } else return null
}

export default Message