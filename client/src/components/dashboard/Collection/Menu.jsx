import {Navigate, NavLink, useLocation, useNavigate} from "react-router-dom";
import {Tab, Col, ListGroup, Row} from "react-bootstrap";
import {useSelector} from "react-redux";

const Menu = () => {
    const types = useSelector((state) => state.types)
    const location = useLocation()
    const navigate = useNavigate()
    const  handleClick = (e) => {
        navigate(`${location.pathname}?type=${e}`, { replace: true })
    }
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey>
            <Row>
                <ListGroup>
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
            </Row>
        </Tab.Container>
    )
}

export default Menu