import { Outlet} from "react-router-dom";

const Auth = () => {
    return(
        <div className="d-flex align-items-center justify-content-center vh-100 mx-auto vw-70 p-2" style={{maxWidth: '1100px'}}>
            <Outlet/>
        </div>
    )
}

export default Auth