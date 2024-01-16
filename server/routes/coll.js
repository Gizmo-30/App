const express = require('express')
const {createColl} = require("../controllers/coll");
const coll = express.Router()

coll.post('/coll/create', createColl)

module.exports = coll