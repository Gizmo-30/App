const express = require('express')
const getDatabasePool = require("../db");
const router = express.Router()

router.get('/', (req,res) => {
    res.json('users')
})

module.exports = router