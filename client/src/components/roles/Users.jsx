import {useSelector} from "react-redux";
import Collections from "../dashboard/Collections";

const Users = ({user}) => {
    const userInfo = useSelector((state) => state.userInfo)
    return (
        <div>
            <Collections user={user}/>
        </div>
    )
}

export default Users