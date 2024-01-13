import React, {useState} from "react";
import {Alert, Button, Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import validation from "../../methods/validation";
import {Input} from "./Input";
import {FormProvider, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setConfirmPassword, setEmail, setPassword, setUsername} from "../../state/slices/user";
import {setError, setSuccess} from "../../state/slices/status";
import axios from "axios";
import {handleInput} from "../../methods/handlers";
import Status from "./Status";

const LogIn = () => {
    const userInfo = useSelector((state) => state.userInfo)
    const status = useSelector((state) => state.status)
    const dispatch = useDispatch()
    const [reset, setReset] = useState(false)
    const [loading, setLoading] = useState(false)

    function handleReset() {
        dispatch(setUsername(""))
        dispatch(setPassword(""))
        dispatch(setError())
        dispatch(setSuccess())
        setReset(false)
    }

    const methods = useForm()
    const onSubmit = methods.handleSubmit( async (data) => {
        try {
            setLoading(true)
            await axios.post('/login', data)
            await dispatch(setSuccess('Login successfully'))
        } catch (e) {
            console.error('Error posting user data ------>', e)
            if(e.response.status === 401) {
                dispatch(setError(e.response.data))
            } else dispatch(setError("Something went wrong :("))
            setReset(true)
        }finally {
            setLoading(false)
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
                <Input
                    type="password"
                    label="password"
                    id="password"
                    value={userInfo.password}
                    onChange={(e) => handleInput(dispatch, setPassword, e)}
                    validation={validation.password}/>

                <Status />
                {/*buttons*/}
                {reset &&
                    <Button
                        id="resetButton"
                        variant="primary"
                        className="mt-3 mb-1 w-100 "
                        type="reset"
                        onClick={() => handleReset(dispatch, [setError, setPassword, setUsername])}>
                        Reset
                    </Button>
                }
                <Button variant="primary" className="mt-2 mb-4 w-100" type="submit">{loading ? 'Loading ...': 'Sign in'}</Button>

                <Form.Group className="text-center">
                    <p>Not a member? <NavLink to="/registration" onClick={() => handleReset()}>Register</NavLink></p>
                </Form.Group>
            </Form>
        </FormProvider>
    )
}

export default LogIn