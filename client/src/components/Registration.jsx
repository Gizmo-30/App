import React from "react";
import {Alert, Button, Form} from "react-bootstrap";
import {Input} from "./Input";
import {setConfirmPassword, setEmail, setPassword, setUsername} from "../state/slices/userSlice";
import validation from "../methods/validation";
import {NavLink} from "react-router-dom";
import {FormProvider, useForm} from "react-hook-form";
import axios from "axios";
import {success} from "../state/slices/statusSlice";
import {useDispatch, useSelector} from "react-redux";
const Registration = () => {
    const userInfo = useSelector((state) => state.userInfo)
    console.log(userInfo)
    const statuses = useSelector((state) => state.status)
    const dispatch = useDispatch()
    const handleInput = (method, e) => {
        dispatch(method(e.target.value))
    }

    const methods = useForm()
    const onSubmit = methods.handleSubmit( async (data) => {
        try {
            await axios.post('/registration', data)
            await dispatch(success('Login successfully'))
        } catch (e) {
            console.log('Error posting user data ------>', e)
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
                    label="confirmPassword"
                    id="confirmPassword"
                    value={userInfo.confirmPassword}
                    onChange={(e) => handleInput(setConfirmPassword, e)}
                    validation={validation.confirmPassword}
                />

                {/*status message*/}
                {/*{errors && <Alert variant="danger">{errors}</Alert>}*/}
                {statuses.status && <Alert variant="success">{statuses.message}</Alert>}

                {/*buttons*/}
                {/*{reset && <Button id="resetButton" variant="primary" className="mt-3 mb-1 w-100 " type="reset" onClick={handleReset}>Reset</Button>}*/}
                <Button variant="primary" className="mt-3 mb-4 w-100" type="submit">Sign in</Button>

                <Form.Group className="text-center">
                    <p>Already have account ? <NavLink to="/login">Log in</NavLink></p>
                </Form.Group>
            </Form>
        </FormProvider>

    )
}

export default Registration