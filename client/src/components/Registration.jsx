import React from "react";
import {Alert, Button, Form} from "react-bootstrap";
import {Input} from "./Input";
import {setConfirmPassword, setEmail, setPassword, setUsername} from "../state/slices/user";
import validation from "../methods/validation";
import {NavLink} from "react-router-dom";
import {FormProvider, useForm} from "react-hook-form";
import axios from "axios";
import {setSuccess, setError, setReset} from "../state/slices/status";
import {useDispatch, useSelector} from "react-redux";
const Registration = () => {
    const userInfo = useSelector((state) => state.userInfo)
    const status = useSelector((state) => state.status)
    const dispatch = useDispatch()

    function handleReset() {
        dispatch(setUsername(""))
        dispatch(setEmail(""))
        dispatch(setPassword(""))
        dispatch(setConfirmPassword(""))
        dispatch(setError(""))
        dispatch(setReset())
    }

    const handleInput = (method, e) => {
        dispatch(method(e.target.value))
    }

    const methods = useForm()
    const onSubmit = methods.handleSubmit( async (data) => {
        try {
            await axios.post('/registration', data)

        } catch (e) {
            console.log('Error posting user data ------>', e)
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
                <Input type="email"
                       label="email"
                       id="email"
                       value={userInfo.email}
                       onChange={(e) => handleInput(setEmail, e)}
                       validation={validation.email}
                />
                <Input
                    type="password"
                    label="password"
                    id="password"
                    value={userInfo.password}
                    onChange={(e) => handleInput(setPassword, e)}
                    validation={validation.password}
                />
                <Input
                    type="password"
                    label="confirm password"
                    id="confirmPassword"
                    value={userInfo.confirmPassword}
                    onChange={(e) => handleInput(setConfirmPassword, e)}
                    validation={validation.confirmPassword}
                />

                {/*status message*/}
                {status.error && <Alert variant="danger" className="mt-2">{status.error}</Alert>}
                {status.success && <Alert variant="success" className="mt-2">{status.success}</Alert>}

                {/*buttons*/}
                {status.reset && <Button id="resetButton" variant="primary" className="mt-3 mb-1 w-100 " type="reset" onClick={handleReset}>Reset</Button>}
                <Button variant="primary" className="mt-3 mb-4 w-100" type="submit">Sign in</Button>

                <Form.Group className="text-center">
                    <p>Already have account ? <NavLink to="/login">Log in</NavLink></p>
                </Form.Group>
            </Form>
        </FormProvider>

    )
}

export default Registration