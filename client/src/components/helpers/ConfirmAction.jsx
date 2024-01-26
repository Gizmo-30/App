import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {setMessage} from "../../state/slices/message";
import {useDispatch, useSelector} from "react-redux";

const ConfirmAction = ({show, onHide, name}) => {
    const modals = useSelector((state) => state.modals)
    const dispatch = useDispatch()
    const onsubmit = async () => {
        onHide()
        console.log(name)
        if(name.action) {
            try {
                const response = await axios.post(`/api/users/change?action=${name.action}`, name.checked)
                dispatch(setMessage(response.data))
            }catch (e) {
                console.error(e)
                dispatch(setMessage("Something went wrong"))
            }
        } else {
            try {
                const response = await axios.post("/api/coll/delete", {name,})
                dispatch(setMessage(response.data))
            } catch (e) {
                console.error(e)
                dispatch(setMessage("Something went wrong"))
            }
        }
    }


    let condition;

    if(modals.confirm.data) {
        const { action } = modals.confirm.data;
        switch (action) {
            case 'admin':
                condition = ' give admin right to user(s)';
                break;
            case 'user':
                condition = ' remove admin right from user(s)';
                break;
            case 'block':
                condition = ' block user(s)';
                break;
            case 'active':
                condition = ' unblock user(s)';
                break;
            case 'delete':
                condition = ' delete user(s)';
                break;
            default:
                condition = ' delete collection';
                break;
        }
    }

    return (
        <Modal show={show} onHide={ onHide}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>Are you sure you want to
                {
                    condition
                } ?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={ onHide}>
                    Close
                </Button>
                <Button variant="warning" onClick={onsubmit}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmAction

