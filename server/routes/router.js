const express = require('express')
const getDatabasePool = require("../db");
const router = express.Router()
const {Users} = require("../models")

router.get('/', async (req,res) => {
    try{
        const data = await Users.findAll()
        res.json(data)
    } catch (error) {
        console.error("Error fetching data", error)
    }
})

module.exports = router