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
    email: {
        required: {
            value: true,
            message: 'required',
        },
        pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
            message: 'Invalid email address',
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
