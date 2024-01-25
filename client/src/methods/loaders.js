import axios from "axios";

export const getLocaluser = () => JSON.parse(localStorage.getItem("user")) || {}

export const getCollectionDetails = async ({params}) => {
    const name = params.name
    const response = await axios.post('/api/coll/get/one', {name})
    return response.data
}