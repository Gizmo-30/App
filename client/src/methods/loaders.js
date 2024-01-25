import {useLocation} from "react-router-dom";
import axios from "axios";
import {useGetCollTypeQuery} from "../state/slices/api";

export const getLocaluser = () => JSON.parse(localStorage.getItem("user")) || {}

export const getCollectionDetails = async ({params}) => {
    const name = params.name
    const response = await axios.post('/api/coll/get/one', {name})
    return response.data
}