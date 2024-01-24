export const getLocaluser = () => JSON.parse(localStorage.getItem("user")) || {}

export const userloader = () => getLocaluser()