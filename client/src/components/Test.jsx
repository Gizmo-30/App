import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../state/slices/counterSlice";
import React from "react";
import {errors, success} from "../state/slices/statusSlice";
import {setConfirmPassword, setEmail, setPassword, setUsername} from "../state/slices/userSlice";
import {useDbDataQuery} from "../state/slices/fetchUsers";
const Test = () => {
    const counter = useSelector((state) => state.counter.value)
    const status = useSelector((state) => state.status)
    const userInfo = useSelector((state) => state.userInfo)
    const {data, error, isLoading} = useDbDataQuery()
    console.log(error)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <h1>{counter}</h1>
            </div>
            <div>
                <button onClick={() => dispatch(errors("error"))}>error</button>
                <button onClick={() => dispatch(success("success"))}>success</button>
                <h1>status {status.status}</h1>
                <h1>message {status.message}</h1>
            </div>
            <div>
                <button onClick={() => dispatch(setUsername("Anvar"))}>setUsername</button>
                <button onClick={() => dispatch(setUsername(""))}>setUsername ---</button>
                <button onClick={() => dispatch(setPassword("123"))}>setPassword</button>
                <button onClick={() => dispatch(setPassword(""))}>setPassword ---</button>
                <button onClick={() => dispatch(setEmail("gmail"))}>setEmail</button>
                <button onClick={() => dispatch(setEmail(""))}>setEmail ---</button>
                <button onClick={() => dispatch(setConfirmPassword("1234"))}>setConfirmPassword</button>
                <button onClick={() => dispatch(setConfirmPassword(""))}>setConfirmPassword ---</button>

                <h1>username {userInfo.username}</h1>
                <h1>password {userInfo.password}</h1>
                <h1>confirmPassword {userInfo.confirmPassword}</h1>
                <h1>email {userInfo.email}</h1>
            </div>
            <div>
                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (
                    <>
                        <h3>{data.message}</h3>
                    </>
                ) : null}
            </div>
        </div>
    )
}

export default Test
