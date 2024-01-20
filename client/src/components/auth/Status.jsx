import {Alert} from "react-bootstrap";
import React from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const Status = ({style}) => {
    const status = useSelector((state) => state.status)
    if (status.name === "error" &&  status.message) {
        return <Alert variant="danger" className="mt-2" style={style}>{status.message}</Alert>
    } else if(status.name === "success" &&  status.message) {
        return <Alert variant="success" className="mt-2" style={style}>{status.message}</Alert>
    } else return null
}

export default Status