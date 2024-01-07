const express = require('express')
const router = express.Router()
const {users} = require("../models")

router.get('/users', async (req,res) => {
    try{
        const data = await users.findAll()
        res.json(data)
    } catch(error) {
        res.status(500).json({error: "Error fetching data"})
        console.error("Error fetching data ----> ", error)
    }
})



module.exports = router