import {useSelector} from "react-redux";
import Collections from "../dashboard/Collection/Collections";

const Users = ({user}) => {
    const userInfo = useSelector((state) => state.userInfo)
    return (
        <div>
            <Collections user={user}/>
        </div>
    )
}

export default Users