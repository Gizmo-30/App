import {NavLink} from "react-router-dom";
import {Tab, Col, ListGroup, Row} from "react-bootstrap";
import {useSelector} from "react-redux";

const Menu = () => {
    const types = useSelector((state) => state.types)
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey={1}>
            <Row>
                <ListGroup>
                    {
                        types.map((e,i) => (
                            <ListGroup.Item key={i} action >
                                {e}
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>


                {/*<Col sm={4}>*/}
                {/*    */}
                {/*</Col>*/}
                {/*<Col sm={8}>*/}
                {/*    <Tab.Content>*/}
                {/*        <Tab.Pane eventKey="#link1">Tab pane content 1</Tab.Pane>*/}
                {/*        <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>*/}
                {/*    </Tab.Content>*/}
                {/*</Col>*/}
            </Row>
        </Tab.Container>
    )
}

export default Menu