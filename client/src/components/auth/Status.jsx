import {Alert} from "react-bootstrap";
import React from "react";
import {useSelector} from "react-redux";

const Status = () => {
    const status = useSelector((state) => state.status)
    if (status.name === "error" &&  status.message) {
        return (
            <div>
                <Alert variant="danger" className="mt-2">{status.message}</Alert>
            </div>
        )
    } else if (status.name === "success" &&  status.message) {
        return (
            <div>
                <Alert variant="success" className="mt-2">{status.message}</Alert>
            </div>
        )
    } else return null
}

export default Status