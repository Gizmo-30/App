import {useSelector} from "react-redux";

const Users = () => {
    const userInfo = useSelector((state) => state.userInfo)
    return (
        <div>
            Hello {userInfo.username} you are user
            thats users page
        </div>
    )
}

export default Users