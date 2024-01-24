import { Outlet} from "react-router-dom";
import NavPanel from "../NavPanel";
import {Row} from "react-bootstrap";

const Auth = () => {
    return(
        <div className="vh-100 d-flex flex-column">
            <NavPanel/>
            <Row className="d-flex align-items-center h-100 justify-content-center w-100">
                <Outlet />
            </Row>
        </div>
    )
}

export default Auth