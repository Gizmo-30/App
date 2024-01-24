import {Container, Spinner} from "react-bootstrap";
import React from "react";

const Loading = () => {
    return <Spinner animation="border" role="loading" className="position-absolute" style={{"bottom": "10px", "right": "10px"}}/>
}

export default Loading