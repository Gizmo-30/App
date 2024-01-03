import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

const Test1 = () => {
    async function fetchData() {
        let response = await axios.get('/test')
        console.log(response)
    }
    useEffect(() => fetchData,[])
    return (
        <div>
            <NavLink to="/test2">test2</NavLink>
        </div>
    )
}

export default Test1