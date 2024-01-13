import React, {useState} from "react";
import {Alert, Button, Form} from "react-bootstrap";
import {Input} from "./Input";
import {setConfirmPassword, setEmail, setPassword, setUsername} from "../../state/slices/user";
import validation from "../../methods/validation";
import {NavLink} from "react-router-dom";
import {FormProvider, useForm} from "react-hook-form";
import axios from "axios";
import {setSuccess, setError, setReset} from "../../state/slices/status";
import {useDispatch, useSelector} from "react-redux";
import {handleInput} from "../../methods/handlers";
import Status from "./Status";
const Registration = () => {
    const userInfo = useSelector((state) => state.userInfo)
    const status = useSelector((state) => state.status)
    const dispatch = useDispatch()

    const [reset, setReset] = useState(false)

    function handleReset() {
        dispatch(setUsername(""))
        dispatch(setEmail(""))
        dispatch(setPassword(""))
        dispatch(setConfirmPassword(""))
        dispatch(setError(""))
        dispatch(setSuccess(""))
        setReset(false)
    }

    const methods = useForm()
    const onSubmit = methods.handleSubmit( async (data) => {
        try {
            await axios.post('/registration', data)
            await dispatch(setSuccess('Registered successfully'))
        } catch (e) {
            console.error('Error posting user data ------>', e)
            try {
                dispatch(setError(e.response.data))
            } catch (e) {
                dispatch(setError("Something went wrong :("))
            }
            setReset(true)
        }
    })

    return (
        <FormProvider {...methods}>
            <Form style={{width: '450px'}} className="border border-primary px-4 py-5 rounded-4" onSubmit={onSubmit}>
                <Input type="text"
                       label="username"
                       id="username"
                       value={userInfo.username}
                       onChange={(e) => handleInput(dispatch, setUsername, e)}
                       validation={validation.username}
                />
                <Input type="email"
                       label="email"
                       id="email"
                       value={userInfo.email}
                       onChange={(e) => handleInput(dispatch, setEmail, e)}
                       validation={validation.email}
                />
                <Input
                    type="password"
                    label="password"
                    id="password"
                    value={userInfo.password}
                    onChange={(e) => handleInput(dispatch, setPassword, e)}
                    validation={validation.password}
                />
                <Input
                    type="password"
                    label="confirm password"
                    id="confirmPassword"
                    value={userInfo.confirmPassword}
                    onChange={(e) => handleInput(dispatch, setConfirmPassword, e)}
                    validation={validation.confirmPassword}
                />

                <Status/>

                {/*buttons*/}
                {reset &&
                    <Button
                        id="resetButton"
                        variant="primary"
                        className="mt-3 mb-1 w-100 "
                        type="reset"
                        onClick={handleReset}>
                        Reset
                    </Button>}
                <Button variant="primary" className="mt-3 mb-4 w-100" type="submit">Sign in</Button>

                <Form.Group className="text-center">
                    <p>Already have account ? <NavLink to="/login" onClick={handleReset}>Log in</NavLink></p>
                </Form.Group>
            </Form>
        </FormProvider>

    )
}

export default Registration