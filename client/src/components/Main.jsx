import {NavLink} from "react-router-dom";

const Main = () => {
    return (
        <div>
            <h1>Hello world</h1>
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