import {NavLink} from "react-router-dom";
import Header from "./Header";

const Main = () => {
    return (
        <div>
            <NavLink to="/dashboard">dashboard</NavLink>
            <br/>
            <NavLink to="/login">login</NavLink>
            <br/>
            <NavLink to="/registration">registration</NavLink>
            <br/>
        </div>
    )
}

export default Main