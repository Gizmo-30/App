import {useDispatch, useSelector} from "react-redux";
import {setSuccess} from "../../state/slices/status";
import {NavLink, useLocation} from "react-router-dom";
import Admins from "../roles/Admins";
import Users from "../roles/Users";

const Dashboard = () => {
    const userInfo = useSelector((state) => state.userInfo)
    console.log(userInfo.role)
    return (
        <div>
            <header className="d-flex justify-content-between">
                <h1>CollApp</h1>
                <input type="search"/>
            </header>
            {userInfo.role === 'admin'? <Admins/>: <Users/>}
        </div>
    )
}

export default Dashboard