import {useSelector} from "react-redux";

const Admins = () => {
    const userInfo = useSelector((state) => state.userInfo)
    return (
        <div>
            <h1>Hello {userInfo.username} you are admin</h1>
            thats Admins page
        </div>
    )
}

export default Admins