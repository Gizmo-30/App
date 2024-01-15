import {useSelector} from "react-redux";
import Collections from "../dashboard/Collections";

const Users = () => {
    const userInfo = useSelector((state) => state.userInfo)
    return (
        <div>
            <Collections/>
        </div>
    )
}

export default Users