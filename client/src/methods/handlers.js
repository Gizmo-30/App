import axios from "axios";
import {setError, setSuccess} from "../state/slices/status";

export const handleInput = (dispatch, method, e) => {
    dispatch(method(e.target.value))
}


