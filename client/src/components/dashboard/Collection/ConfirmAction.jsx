import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {setMessage} from "../../../state/slices/message";
import {useDispatch} from "react-redux";

const ConfirmAction = ({show, onHide, name}) => {
    const dispatch = useDispatch()
    const onsubmit = async () => {
        onHide()
        try {
            const response = await axios.post("/api/coll/delete", {name})
            dispatch(setMessage(response.data))
        } catch (e) {
            console.error("E deleting coll ---->", e)
            dispatch(setMessage("Something went wrong :("))
        }
    }
    return (
        <Modal show={show} onHide={ onHide}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete collection?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={ onHide}>
                    Close
                </Button>
                <Button variant="warning" onClick={onsubmit}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmAction

