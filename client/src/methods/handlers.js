import axios from "axios";
import {setError, setSuccess} from "../state/slices/status";
import {Navigate} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
export const handleInput = (dispatch, method, e) => {
    dispatch(method(e.target.value))
}

