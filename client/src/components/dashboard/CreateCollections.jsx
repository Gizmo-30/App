import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import {useForm} from "react-hook-form";
import {findInputError, isFormInvalid} from "../../methods/findInputError";
import React from "react";
import validation from "../../methods/validation";
import Errors from "../Errors";
import axios from "axios";
import {useSelector} from "react-redux";

function CreateCollections(props) {
    const userInfo = useSelector((state) => state.userInfo)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const inputError = findInputError(errors, "name");
    const isInvalid = isFormInvalid(inputError);

    const onSubmit = handleSubmit( async (data) => {
        try {
            const response = await axios.post('/coll/create', {...data, user: userInfo.username})
        } catch (e) {
            console.error("E creating coll ----->", e)
        }
    })

    const onclose = () => {
        props.onHide()
        reset()
    }

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
                <Form onSubmit={onSubmit} className="mx-2">
                    <Form.Group className="mb-4">
                        <Form.Label className="d-flex justify-content-between align-items-center  mb-2">
                            Name
                            <Errors isInvalid={isInvalid} inputError={inputError}/>
                        </Form.Label>
                        <Form.Control type="text" {...register('name', validation.collection.name)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="d-flex justify-content-between ">
                            Description
                            <Errors isInvalid={isInvalid} inputError={inputError}/>
                        </Form.Label>
                        <Form.Control as="textarea" {...register('description', validation.collection.desc)} rows={2} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select aria-label="Default select example" className="mb-3" {...register('type')}>
                            <option value="books">books</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={onSubmit}>  Create  </Button>
                <Button onClick={onclose}> Close </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateCollections

