import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import {FormSelect, FormText} from "react-bootstrap";

function CreateCollections(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create new collection
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control type="text"></Form.Control>
                    <Form.Group className="mb-3">
                        <Form.Label>Name of collection</Form.Label>
                        <Form.Control type="text" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control type="text" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    );
}

export default CreateCollections

