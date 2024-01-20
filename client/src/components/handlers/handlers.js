const axios = require("axios");
exports.handleDelete = async (e) => {
    const name = e.target.parentElement.getAttribute('id')
    try {
        const response = await axios.post("api/coll/delete", name)
    } catch (e) {
        console.error("E deleting coll ---->", e)
    }
}
