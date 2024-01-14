import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const CheckAuth = () => {
    const userInfo = useSelector((state) => state.userInfo)
    const location = useLocation()
    return (
        userInfo?.username
            ? <Outlet />
            : <Navigate to="/login" state={{from: location}} replace/>
    )
}

export default CheckAuth