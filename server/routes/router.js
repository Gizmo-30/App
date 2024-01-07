const express = require('express')
const getDatabasePool = require("../db");
const router = express.Router()
const {Users} = require("../models")

router.get('/', async (req,res) => {
    const data = await Users.findAll()
        .then(result =>  res.json(result))
        .catch(error => {
            res.send(error)
            console.error("Error fetching data", error)
        })
})

module.exports = router