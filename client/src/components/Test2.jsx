import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
const Test2 = () => {
    async function fetchData() {
        let response = await axios.get('/')
        console.log(response)
    }
    useEffect(() => fetchData,[])
    return (
        <div>
            <NavLink to="/">test1</NavLink>
        </div>
    )
}

export default Test2