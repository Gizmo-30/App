const express = require('express')
const {createColl, getColl} = require("../controllers/coll");
const coll = express.Router()

coll.post('/coll/create', createColl)
coll.get('/coll/get', getColl)

module.exports = coll