import React from "react";
import {Alert, Button, Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import validation from "../methods/validation";
import {Input} from "./Input";
import {FormProvider, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setPassword, setUsername} from "../state/slices/user";
import {setError, setSuccess, setReset} from "../state/slices/status";
import Registration from "./Registration";
import axios from "axios";

const LogIn = () => {
    const userInfo = useSelector((state) => state.userInfo)
    const status = useSelector((state) => state.status)
    const dispatch = useDispatch()
    // can be called in app and passed through props

    function handleReset() {
        dispatch(setUsername(""))
        dispatch(setPassword(""))
        dispatch(setError(""))
        dispatch(setReset())
    }

    // can be exported from another file and given names of methods

    const handleInput = (method, e) => {
        dispatch(method(e.target.value))
    }
    //     can be exported

    const methods = useForm()
    const onSubmit = methods.handleSubmit( async (data) => {
        try {
            await axios.post('/login', data)
            await dispatch(setSuccess('Login successfully'))
        } catch (e) {
            console.error('Error posting user data ------>', e)
            if(e.response.status === 401) {
                dispatch(setError(e.response.data))
            } else dispatch(setError("Something went wrong :("))
            dispatch(setReset())
        }
    })

    return (
        <FormProvider {...methods}>
            <Form style={{width: '450px'}} className="border border-primary px-4 py-5 rounded-4" onSubmit={onSubmit}>
                <Input type="text"
                       label="username"
                       id="username"
                       value={userInfo.username}
                       onChange={(e) => handleInput(setUsername, e)}
                       validation={validation.username}
                />
                <Input
                    type="password"
                    label="password"
                    id="password"
                    value={userInfo.password}
                    onChange={(e) => handleInput(setPassword, e)}
                    validation={validation.password}/>

                {/*status message*/}
                {status.error && <Alert variant="danger" className="mt-2">{status.error}</Alert>}
                {status.success && <Alert variant="success" className="mt-2">{status.success}</Alert>}

                {/*buttons*/}
                {status.reset && <Button id="resetButton" variant="primary" className="mt-3 mb-1 w-100 " type="reset" onClick={handleReset}>Reset</Button>}
                <Button variant="primary" className="mt-2 mb-4 w-100" type="submit">Sign in</Button>

                <Form.Group className="text-center">
                    <p>Not a member? <NavLink to="/registration">Register</NavLink></p>
                </Form.Group>
            </Form>
        </FormProvider>
    )
}

export default LogIn