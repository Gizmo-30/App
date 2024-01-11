export const handleInput = (dispatch, method, e) => {
    dispatch(method(e.target.value))
}

