import {useLocation, useNavigate} from "react-router-dom";
import {ListGroup, Row, Tab} from "react-bootstrap";
import {useSelector} from "react-redux";
import loading from "../Loading";

const Menu = () => {
    const types = useSelector((state) => state.types)
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <Tab.Container >
            <ListGroup className="shadow-sm w-100" >
                {
                    types.map((e,i) => (
                        <ListGroup.Item
                            key={i} action
                            active={`/${e}` === location.pathname}
                            onClick={() =>  navigate(e)}
                        >
                            {e}
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Tab.Container>
    )
}

export default Menu