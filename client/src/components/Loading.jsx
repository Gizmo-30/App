import {Spinner} from "react-bootstrap";
import React from "react";

const Loading = () => {
    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <Spinner animation="border" role="loading"/>
        </div>
    )
}

export default Loading