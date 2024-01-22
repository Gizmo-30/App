import {useSelector} from "react-redux";
import Collections from "../dashboard/Collection/Collections";

const Users = ({user}) => {
    return <Collections user={user}/>
}

export default Users