import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import {useForm} from "react-hook-form";
import {findInputError, isFormInvalid} from "../../../methods/findInputError";
import React from "react";
import validation from "../../../methods/validation";
import Errors from "../../Errors";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import authHeader from "../../../methods/authHeader";
import {Alert, Col, Row} from "react-bootstrap";
import {setError, setSuccess} from "../../../state/slices/status";
import Status from "../../auth/Status";

function Create(props) {
    const userInfo = useSelector((state) => state.userInfo)
    const status = useSelector((state) => state.status)
    const dispatch = useDispatch()
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
            const response = await axios.post('/api/coll/create', data, {headers: authHeader()})
            dispatch(setSuccess("Collection created successfully"))
            setTimeout(() => onclose(), 3000)
        } catch (e) {
            console.error("E creating coll ----->", e)
            try {
                if(e.response.status) {
                    dispatch(setError(e.response.data))
                }
            } catch (e) {
                dispatch(setError("Something went wrong :("))
            }
        }
    })

    const onclose = () => {
        props.onHide()
        reset()
        dispatch(setError(""))
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
                            <option value="book">books</option>
                            <option value="movie">movies</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className=" align-items-center">
                <Status style={{"marginRight": "auto"}}/>
                <div className="d-flex column-gap-3 justify-content-end">
                    <Button variant="success" onClick={onSubmit} className="modal-button">  Create  </Button>
                    <Button onClick={onclose} className="modal-button"> Close </Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default Create

