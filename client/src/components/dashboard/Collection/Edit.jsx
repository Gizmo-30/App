import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Errors from "../../auth/Errors";
import validation from "../../../methods/validation";
import Status from "../../auth/Status";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import {setError, setSuccess} from "../../../state/slices/status";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {findInputError, isFormInvalid} from "../../../methods/findInputError";
import axios from "axios";

const Edit = ({show, onHide, data}) => {
    const [name, setName] = useState(data.name)
    const [description, setDescription] = useState(data.description)

    useEffect(() => {
        setName(data.name);
        setDescription(data.description);
    }, [data.name, data.description]);

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
            const response = await axios.post("/api/coll/edit", {data, initialName: data.name})
            dispatch(setSuccess("Collection updated"))
            setTimeout(() => onclose(), 3000)
        } catch (e) {
            console.error("Error changing collection", e)
            try {
                dispatch(setError(e.response.data))
            } catch (e) {
                dispatch(setSuccess("something went wrong :("))
            }
        }
    })
    function onclose() {
        onHide()
        dispatch(setError(""))
        reset()
        setDescription(data.description)
        setName(data.name)
    }
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit collection
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit} className="mx-2">
                    <Form.Group className="mb-4">
                        <Form.Label className="d-flex justify-content-between align-items-center  mb-2">
                            Name
                            <Errors isInvalid={isInvalid} inputError={inputError}/>
                        </Form.Label>
                        <Form.Control type="text"
                                      {...register('name', validation.collection.name)}
                                      value={name}
                                      onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="d-flex justify-content-between ">
                            Description
                            <Errors isInvalid={isInvalid} inputError={inputError}/>
                        </Form.Label>
                        <Form.Control as="textarea"
                                      {...register('description', validation.collection.desc)}
                                      rows={2}
                                      value={description}
                                      onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select aria-label="Default select example" className="mb-3" {...register('type')}>
                            <option value="book" selected={data.type === "book"}>books</option>
                            <option value="movie" selected={data.type === "movie"}>movies</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className=" align-items-center">
                <Status style={{"marginRight": "auto"}}/>
                <div className="d-flex column-gap-3 justify-content-end">
                    <Button variant="success" onClick={onSubmit} className="modal-button">  Edit  </Button>
                    <Button onClick={onclose} className="modal-button"> Close </Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default Edit