import React, {useState} from "react";
import {Alert, Button, Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import validation from "../methods/validation";
import {Input} from "./Input";
import {FormProvider, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setPassword, setUsername} from "../state/slices/userSlice";

const LogIn = () => {
    const userInfo = useSelector((state) => state.userInfo)
    const dispatch = useDispatch()

    const [error, setError] = useState("");
    const [reset, setReset] = useState(false);
    const [success, setSuccess] = useState(false);

    function handleReset() {
        setError("")
        setReset(false)
    }

    const handleInput = (method, e) => dispatch(method(e.target.value))

    const methods = useForm()
    const onSubmit = methods.handleSubmit(data => {
        console.log(data)
    })
    return (
        <FormProvider {...methods}>
            <Form style={{width: '450px'}} className="border border-primary px-4 py-5 rounded-4" onSubmit={onSubmit}>
                <Input type="text"
                       label="username or email"
                       id="username"
                       value={userInfo.username}
                       onChange={(e) => handleInput(setUsername, e)}
                       validation={validation.username}
                />
                <Input
                    type="password"
                    label="Password"
                    id="password"
                    value={userInfo.password}
                    onChange={(e) => handleInput(setPassword, e)}
                    validation={validation.password}/>

                {/*status message*/}
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