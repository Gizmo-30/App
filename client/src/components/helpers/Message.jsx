import {Alert} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {setError} from "../../state/slices/status";
import {setMessage} from "../../state/slices/message";

const Message = () => {
    const message = useSelector((state) => state.message)
    const dispatch = useDispatch()
    setTimeout(() => dispatch(setMessage("")), 4000)

    if (message.message) {
        return <Alert variant="primary" className="position-absolute bottom-0 end-0 mx-3">{message.message}</Alert>
    } else return null
}

export default Message