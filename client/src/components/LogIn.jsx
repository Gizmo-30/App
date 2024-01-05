import React, {useState} from "react";
import {Form, Alert, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Handlers from "../methods/Handlers";
import validation from "../methods/validation";
import {Input} from "./Input";
import {FormProvider, useForm} from "react-hook-form";

const LogIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [reset, setReset] = useState(false);
    const [success, setSuccess] = useState(false);
    const handler = new Handlers(setUsername, setPassword)

    function handleReset() {
        setError("")
        setReset(false)
        setUsername("")
        setPassword("")
    }

    const methods = useForm()
    const onSubmit = methods.handleSubmit(data => {
        console.log(data)
    })
    return (
        <FormProvider {...methods}>
            <Form style={{width: '450px'}} className="border border-primary px-4 py-5 rounded-4" onSubmit={onSubmit}>
                <Input type="text" label="username" id="username" value={username} onChange={handler.handleUsername} validation={validation.username}/>
                <Input type="password" label="Password" id="password" value={password} onChange={handler.handlePassword} validation={validation.password}/>

                {/*status messsage*/}
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">User log in successfully</Alert>}

                {/*buttons*/}
                {reset && <Button id="resetButton" variant="primary" className="mt-3 mb-1 w-100 " type="reset" onClick={handleReset}>Reset</Button>}
                <Button variant="primary" className="mt-3 mb-4 w-100" type="submit">Sign in</Button>

                <Form.Group className="text-center">
                    <p>Not a member? <NavLink to="/signup">Register</NavLink></p>
                </Form.Group>
            </Form>
        </FormProvider>
    )
}

export default LogIn