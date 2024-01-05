const validation = {
    username: {
        required: {
            value: true,
            message: 'required',
        },
        maxLength: {
            value: 15,
            message: `maximum 15 characters`
        },
        pattern: {
            value: /^[A-Za-z]+$/,
            message: "Only alphabets are allowed"
        },
    },
    password: {
        required: {
            value: true,
            message: 'required',
        },
        maxLength: {
            value: 25,
            message: `maximum 25 characters`,
        },
    },
    confirmPassword: {
        required: {
            value: true,
            message: 'required',
        },
    }
}

export default validation
