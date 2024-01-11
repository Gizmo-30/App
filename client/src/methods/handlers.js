import {setReset} from "../state/slices/status";
export function handleReset(dispatch, array) {
    array.map(e => dispatch(e("")))
    dispatch(setReset())
}
export const handleInput = (dispatch, method, e) => {
    dispatch(method(e.target.value))
}

