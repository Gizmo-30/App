import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../state/slices/counterSlice";
import React from "react";
const Test = () => {
    const counter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <h1>{counter}</h1>
        </div>
    )
}

export default Test
