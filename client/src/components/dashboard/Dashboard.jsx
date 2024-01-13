import {useDispatch, useSelector} from "react-redux";
import {setSuccess} from "../../state/slices/status";
import {NavLink, useLocation} from "react-router-dom";
import Admins from "../Admins";
import Users from "../Users";

const Dashboard = () => {
    const userInfo = useSelector((state) => state.userInfo)
    const status = useSelector((state) => state.status)
    const dispatch = useDispatch()
    dispatch(setSuccess(""))

    const location = useLocation();
    const role = new URLSearchParams(location.search).get('role');

    if(!userInfo.username) {
        return (
            <div>
                Wellcome to Colecctions App
                <br/>
                <NavLink to="/login">   Login  </NavLink>
                <br/>
                <NavLink to="/registration">  Register  </NavLink>
            </div>

        )
    }

    return (
        <div>
            {role === 'admin'? <Admins/>: <Users/>}
        </div>
    )
}

export default Dashboard