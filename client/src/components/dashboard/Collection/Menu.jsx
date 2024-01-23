import {useLocation, useNavigate} from "react-router-dom";
import {ListGroup, Row, Tab} from "react-bootstrap";
import {useSelector} from "react-redux";

const Menu = () => {
    const types = useSelector((state) => state.types)
    const location = useLocation()
    const navigate = useNavigate()
    const  handleClick = (e) => {
        navigate(`${location.pathname}?type=${e}`, { replace: true })
    }
    return (
        <Tab.Container >
            <ListGroup className="shadow-sm w-100" >
                {
                    types.map((e,i) => (
                        <ListGroup.Item
                            key={i} action
                            active={`?type=${e}` === location.search}
                            onClick={() => handleClick(e)}
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